import json
import boto3
import uuid
import datetime

def lambda_handler(event, context):
    
    
    client = boto3.client('dynamodb')
    
    try:
        event = json.loads(event['body'])
        region_plate = f"{event['region']}|{event['plate'][0:21].upper()}"
        trait = event['trait']
        note = event['note'][0:1001]
    except:
        return {
            'isBase64Encoded': False,
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid submission.'}),
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
       
    id = str(uuid.uuid4())
    date_time = datetime.datetime.now().isoformat()
    
    
    try:
        response = client.put_item(
        TableName="license-plates",
        Item={
            "reportId": {"S": id},
            "regionPlate": {"S": region_plate},
            "trait": {"S": trait},
            "note": {"S": note},
            "dateTime": {"S": date_time}
            }
        )
        
        # must check LastEvaluatedKey to know whether to loop to get true count. pass in ExclusiveStartKey
        count_response = client.query(
            TableName="license-plates",
            Select="COUNT",
            ConsistentRead=True,
            KeyConditionExpression="regionPlate = :partitionkeyval",
            ExpressionAttributeValues={":partitionkeyval": { "S": region_plate }}
        )
        
        count = count_response['Count']
        
        while 'LastEvaluatedKey' in count_response:
            count_response = client.query(
                TableName="license-plates",
                Select="COUNT",
                ConsistentRead=True,
                ExclusiveStartKey=count_response['LastEvaluatedKey'],
                KeyConditionExpression="regionPlate = :partitionkeyval",
                ExpressionAttributeValues={":partitionkeyval": { "S": region_plate }}
            )
            count += count_response['Count']
            
    except:
        return {
            'isBase64Encoded': False,
            'statusCode': 500,
            'body': json.dumps({'error': ('Sorry, something went wrong. '
                'Please try again later.')}),
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
    
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'body': json.dumps({'timesReported': max(0, count - 1)}),
        'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
        }
    }

import json
import boto3
import uuid
import datetime

def lambda_handler(event, context):

    client = boto3.client('dynamodb')
    
    try:
        # event = json.loads(event['body'])
        # region_plate = f"{event['region']}|{event['plate'][0:21].upper()}"
        region_plate = f"{event['queryStringParameters']['region']}|{event['queryStringParameters']['plate'][0:21].upper()}"
    except:
        return {
            'isBase64Encoded': False,
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid search.'}),
            'headers': {
                "content-type": "application/json"
            }
        }
       
    
    try:
        
        # must check LastEvaluatedKey to know whether to loop to get true count. pass in ExclusiveStartKey
        response = client.query(
            TableName="license-plates",
            Select="ALL_ATTRIBUTES",
            ConsistentRead=True,
            KeyConditionExpression="regionPlate = :partitionkeyval",
            ExpressionAttributeValues={":partitionkeyval": { "S": region_plate }}
        )
        
        def item_mapper(item):
            region, plate = item['regionPlate']['S'].split('|', maxsplit=1)
            return {
                'region': region,
                'plate': plate,
                'reportId': item['reportId']['S'],
                'datetimeISO': item['dateTime']['S'],
                'trait': item['trait']['S'],
                'note': item['note']['S']
            }
        
        results = {
            'reports': list(map(item_mapper, response['Items'])),
            'numReportsBatch': response['Count']
        }
        
        if 'LastEvaluatedKey' in response:
            results['moreResultsAvailable'] = True
            results['LastEvaluatedKey'] = response['LastEvaluatedKey']
        else:
            results['moreResultsAvailable'] = False
        
            
    except Exception as e:
        return {
            'isBase64Encoded': False,
            'statusCode': 500,
            'body': json.dumps({
                'error': ('Sorry, something went wrong. '
                'Please try again later.')
            }),
            'headers': {
                "content-type": "application/json"
            }
        }
    
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'body': json.dumps(results),
        'headers': {
            "content-type": "application/json"
        }
    }

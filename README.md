# License Plate Reporter

This simple app lets you report a bad or dangerous driver.

It was my way of learning how to make a serverless backend with AWS, and I 
threw together a quick frontend using React and Bulma.

The backend used an API Gateway in front of some Lambda functions which 
updated and queried a DynamoDB table.

I've included the code for the Lambda functions in the /lambda directory. 
Someday I might get around to creating a CloudFormation template to make the 
infrastructure reproducible. 

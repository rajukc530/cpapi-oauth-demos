openssl dhparam -outform PEM -out dhparam.pem 2048
openssl genrsa -out private_signature.pem 2048
openssl rsa -in private_signature.pem -outform PEM -pubout -out public_signature.pem
openssl genrsa -out private_encryption.pem 2048
openssl rsa -in private_encryption.pem -outform PEM -pubout -out public_encryption.pem
yarn build && scp -i ../rune-tanja.pem -r dist/* ubuntu@ec2-18-194-154-44.eu-central-1.compute.amazonaws.com:/var/www/html

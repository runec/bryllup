yarn build &&
ssh -i ../rune-tanja.pem ubuntu@ec2-18-194-154-44.eu-central-1.compute.amazonaws.com "rm -rf /var/www/html/*" &&
scp -i ../rune-tanja.pem -r dist/* ubuntu@ec2-18-194-154-44.eu-central-1.compute.amazonaws.com:/var/www/html

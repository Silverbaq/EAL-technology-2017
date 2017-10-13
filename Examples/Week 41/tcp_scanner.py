from scapy.all import *

my_ip = "192.168.1.100"
ports = [21, 22, 80, 443]

def scan(ip_adr, port):
	ip = IP(dst=ip_adr)
	tcp = TCP(dport=port, flags="S")
	result = sr1(ip/tcp, timeout=2, verbose=0)
	if result == None:
		a = ''
	elif result['TCP'].flags == 0x12:
		print '[*] port {} is open!'.format(port)
		send(ip_adr/TCP(dport=port, flags="R"), verbose=0)
	else:
		a = ''


for x in ports:
	scan(my_ip, x)

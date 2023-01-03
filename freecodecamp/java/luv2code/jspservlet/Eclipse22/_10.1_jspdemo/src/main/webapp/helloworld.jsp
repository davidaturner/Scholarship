<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hello, World!</title>
</head>
<body>
<!-- 
	NOTES:
	Make sure you have Apache Tomcat installed - C:\ProgramFiless\Apache Software Foundation
	Use Tomcat admin (located in the hidden icon) to STOP the server, switching it over to Manual window service.
	Install Tomcat into Server window.
	Open Tomcat and update admin port from '-' to 8006. Save all.
	Create jsp under webapp.
	Right click on jsp file. Run as. Run on Server. Always run app on this server - checked.
	
	When you are finished, stop the server and check Tomcat admin to see that localhost:8080 is not
	being used. Close localhost: 8080 window.
 -->
	<h3>Hello World of Java</h3>
	
	The time of this Server is <%= new java.util.Date() %>
</body>
</html>
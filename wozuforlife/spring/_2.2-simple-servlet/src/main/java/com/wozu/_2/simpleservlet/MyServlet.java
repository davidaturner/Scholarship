package com.wozu._2.simpleservlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//HTTP, or Hypertext Transfer Protocol, is the foundation of communication for the web. It is an application layer 
//protocol for communication between systems using hypermedia documents such as HTML. Since then, HTTP has been 
//extended to support more than just hypertext markup documents including images and video. HTTP was invented to 
//enable communication between web browsers and web servers.

//The lifecycle of an HTTP request between a client and server can be distilled into four distinct parts. First, a 
//connection is made between the client and the server. This connection transmits the request and response. Next, 
//the client sends an HTTP message over the HTTP connection to the server. Then, the server will read the message 
//sent from the client, perform any necessary computation, and return an HTTP message as a response. Finally, the 
//connection between the client and the server will either close or remain open for further requests.

//A class that inherits from HttpServlet is a web servlet. As such, developers can implement CRUD methods (i.e., GET, 
//POST, PUT, and DELETE) to handle the various HTTP requests sent to the server. These methods include doGet(), doPost(), 
//doPut(), and doDelete(). Each method takes in an HttpServletRequest object which is sent from the client to the server 
//and an HttpServletResponse object which is sent from the server to the client.

@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {

    private static final long serialVersionUID = 6632886175268784375L;

    // resource management
    // throws ServletException
    public void init() throws ServletException {
        super.init();
    }

    // resource management
    public void destroy() {
        super.destroy();
    }

    // Create
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPost was called.");
    }

    // Read
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    	// Retrieve the "Test-Header" value from the HTTP request header
    	String testHeaderID = request.getHeader("Test-Header");
    	String testHeaderResponse;

    	// If the response is not null, and has a value, replace with said value.
    	if(testHeaderID != null && !testHeaderID.isEmpty()) {
    	    testHeaderResponse = testHeaderID;
    	}else {
    	    testHeaderResponse = "nothing";
    	    // Changes the response status to 400 Bad Request.
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    	}

    	// Store the 'responseText' string in the response object (to be sent to the client)
    	String responseText = "You sent " + testHeaderResponse + " to the server. ";
    	System.out.println(responseText);
    	
    	// writes the text to the response.
    	response.getWriter().append(responseText);

    	System.out.println("doGet was called.");
    	}
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        System.out.println("doGet was called.");
//    }

    // Update
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPut was called.");
    }

    // Delete
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doDelete was called.");
    }
}

package com.wozu.dogo.chat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * Inside the MessageController add a @RequestMapping("/api") annotation just below the @RestController 
 * annotation. By adding this annotation at the top of the class, any path within the MessageController 
 * will need the prefix /api to be accessed. This is useful when creating an API because it is clear that 
 * this route is for data only and not for viewing pages.
 */
@RequestMapping("/api")
/*
 * @RestController: This annotation is actually a combination of two different annotations.
 * 
 * @Controller - The basic controller annotation but this will attempt to return a view after searching the 
 * default path for a matching view.
 * @ResponseBody - Tells the controller to automatically serialize to JSON what is returned from the method and 
 * then that JSON is placed inside the response body of the HTTP response before being sent back to the client. When 
 * combining two or more annotations into a single annotation, it is called a meta-annotation. 
 * 
 * The @RestController is a great example of a meta-annotation that creates a seamless transfer of information 
 * without additional overhead.
 * 
 */
@RestController
public class MessageController {

	/*
	 * @Autowired: When you need to access methods from a different class @Autowired will take care of finding 
	 * and implementing the correct classes based on the name of the property or method. In this case, you need 
	 * access to an instance of the DAO to query the database.
	 */
    @Autowired
    MessageRepository dao;

    // Special math calculation from the API.
    @GetMapping("math/add/{x}/{y}")
    public int getMath(@PathVariable("x") int x,@PathVariable("y") int y ) {
        return x + y;
    }
    
    // The usual CRUD.
    @GetMapping("/chat")
    public List<Message> getMessages() {
        List<Message> foundMessages = dao.findAll();
        return foundMessages;
    }

    @GetMapping("/chat/{id}")
    public ResponseEntity<Message> getMessage(@PathVariable(value="id") Integer id) {
        Message foundMessage = dao.findById(id).orElse(null);

        if(foundMessage == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }
        return ResponseEntity.ok(foundMessage);
    }

    @PostMapping("/chat")
    public ResponseEntity<Message> postMessage(@RequestBody Message message) {

        // saving to DB using instance of the repo interface
        Message createdMessage = dao.save(message);

        // RespEntity crafts response to include correct status codes.
        return ResponseEntity.ok(createdMessage);
    }

    @DeleteMapping("/chat/{id}")
    public ResponseEntity<Message> deleteMessage(@PathVariable(value="id") Integer id) {
        Message foundMessage = dao.findById(id).orElse(null);

        if(foundMessage == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }else {
            dao.delete(foundMessage);
        }
        return ResponseEntity.ok().build();
    }
}
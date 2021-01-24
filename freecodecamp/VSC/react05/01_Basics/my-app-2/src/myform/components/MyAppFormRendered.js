function MyAppFormRendered(props) {
    return(
        <main>
            <form>
                <input type="text" 
                            name="firstname"
                            value={props.data.firstname}
                            onChange={props.handleChange}
                            placeholder="First Name"
                        /><br />

                    <input type="text" 
                            name="lastname"
                            value={props.data.lastname}
                            onChange={props.handleChange}
                            placeholder="Last Name"
                        /><br />

                    <input type="text"
                            name="age"
                            value={props.data.age}
                            onChange={props.handleChange}
                            placeholder="Age"
                        /><br /><br />

                    <label>
                        <input type="radio"
                            name="gender"
                            value="Male"
                            checked = {props.data.gender === "Male"}
                            onChange = {props.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                            name="gender"
                            value="Female"
                            checked = {props.data.gender === "Female"}
                            onChange = {props.handleChange}
                        /> Female
                    </label>
                    <br /><br />

                    <select value={props.data.destination} 
                                name="destination"
                                onChange={props.handleChange}>
                        <option value="">Please select:</option>
                        <option value="Wilkinsburg">Wilkinburg</option>
                        <option value="Mt Lebanon">Mt Lebanon</option>
                        <option value="Pittsburgh">Pittsburgh</option>
                        <option value="Hazelwood">Hazelwood</option>
                    </select>
                    <br /><br />

                    <label>
                        <input type="checkbox"
                                name="isVegan"
                                onChange={props.handleChange}
                                checked={props.data.isVegan}
                                /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                                name="isKosher"
                                onChange={props.handleChange}
                                checked={props.data.isKosher}
                                /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                                name="isLatoseFree"
                                onChange={props.handleChange}
                                checked={props.data.isLatoseFree}
                                /> Latose Free?
                    </label>
                    <br /><br />
                    <button>Submit!</button>
                </form>
                <br />
                <h2>You have entered:</h2>
                <p>Name: {props.data.firstname} {props.data.lastname}</p>
                <p>Age: {props.data.age}</p>
                <p>Gender: {props.data.gender}</p>
                <p>Destination: {props.data.destination}</p>
                <p>Dietary Restrictions:</p>
                <p>Vegan: {props.data.isVegan?"Yes":"No"}</p><br /><br />
                <p>Kosher: {props.data.isKosher?"Yes":"No"}</p><br /><br />
                <p>Latose Free: {props.data.isLatoseFree?"Yes":"No"}</p><br /><br />
            </main>

    )
}

export default MyAppFormRendered
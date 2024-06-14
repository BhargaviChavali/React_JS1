const Form=()=>{
    return(
        <div>
            <form>
                <h1>Student Details</h1>
                <label>Name : </label>
                <input type="text" id="name" placeholder="Enter your name"/><br/><br/>
                <label>Email_ID : </label>
                <input type="text" id="mail" placeholder="Enter your mail_id"/><br/><br/>
                <label>Roll_NO : </label>
                <input type="text" id="roll_no" placeholder="Enter your roll_no"/><br/><br/>
                <label>Phone_NO : </label>
                <input type="text" id="phone_no" placeholder="Enter your phone_no"/><br/><br/>
            </form>
        </div>
    );
}

export default Form;
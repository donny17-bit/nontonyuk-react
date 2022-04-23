import React from "react";
import { useState } from "react";
import styles from "./React.module.css";

function BasicReact() {
  const data = [
    { id: 1, name: "spiderman" },
    { id: 2, name: "batman" },
    { id: 3, name: "lego" },
  ];

  const [email, setEmail] = useState("");
  const [keyword, setKeyword] = useState("");
  const [showDate, setShowDate] = useState(false);

  const handleClick = (age, name) => {
    alert("Button clicked");
    console.log(name, age);
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    console.log("submit", data);
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("reset");
  };

  const handleChangeEmail = (event) => {
    // event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("User press enter");
      console.log("keyword : ", event.target.value);
    }
  };

  return (
    <>
      <h1>BasicReact Page</h1>
      <br />
      <h3>Mapping</h3>
      {data.map((item, index) => (
        <div key={item.id}>
          <button>{item.name}</button>
        </div>
      ))}
      <h3>Event</h3>
      <h5>button</h5>
      {/* {onClick}  */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick(1, "doni")}>Click Me</button>
      {/* {onSubmit} */}
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <button onClick={handleClick}>Click Me</button>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <h5>input</h5>
      <input
        type="email"
        placeholder="Input your email..."
        onChange={handleChangeEmail}
      />
      <h6>your email is {email}</h6>
      <input type="text" placeholder="Search.." onKeyPress={handleSearch} />
      <h3>conditional rendering</h3>
      <h5>short logic</h5>
      <button onClick={() => setShowDate(!showDate)}>Show Date</button>
      {showDate && <h1>{new Date().toLocaleDateString()}</h1>}
      <h5>Ternary Operator</h5>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={item.id}>
            <button>{item.name}</button>
          </div>
        ))
      ) : (
        <h6> data not found</h6>
      )}
      <h5>style</h5>
      {/* react module */}
      <h1 className={`${styles.heading} ${styles.textUnderline} text-center`}>
        Hello World
      </h1>
      <h1 className={(styles.heading, styles.textUnderline)}>Hello World</h1>
      <h1 className={styles.heading2}>Hello World</h1>
    </>
  );
}

export default BasicReact;

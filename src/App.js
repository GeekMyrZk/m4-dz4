import React, {useState} from "react";

//styles
const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    form: {
        display: 'inline-block',
        textAlign: 'left',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        width: '100%',
        padding: '8px',
        margin: '5px 0',
        boxSizing: 'border-box',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    dataDisplay: {
        marginTop: '20px',
    },
};


function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
  return (
    <>
      <div className="App"
           style={styles.container}>
          <h1>Авторизация / Регистрация</h1>
          <form style={styles.form}>
              <label style={styles.label}>
                  ФИО:
                  <input
                      style={styles.input}
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label style={styles.label}>
                  Возраст:
                  <input
                      style={styles.input}
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label style={styles.label}>
                  Электронная почта:
                  <input
                      style={styles.input}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label style={styles.label}>
                  Номер телефона:
                  <input
                      style={styles.input}
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                  />
              </label>
          </form>
          <div style={styles.dataDisplay}>
              <h2>Введенные данные:</h2>
              <p>ФИО: {formData.fullName}</p>
              <p>Возраст: {formData.age}</p>
              <p>Электронная почта: {formData.email}</p>
              <p>Номер телефона: {formData.phoneNumber}</p>
          </div>


      </div>
    </>
  );
}

export default App;

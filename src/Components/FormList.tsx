import React, { useState } from 'react';

function FormList() {
  const [jmeno, setJmeno] = useState('');
  const [chyba, setChyba] = useState("");


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();






    if (jmeno.trim() === "") {
      setChyba("Jmeno nesmi byt prazdne")
      return;
    }
    alert('Ahoj ' + jmeno);

    try {
      const response = await fetch(("https://crudcrud.com/api/b14c935176564ab79a67797467d0caeb/uzivatele"),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jmeno }),

        });

      if (!response.ok) {
        throw new Error(`Server vrátil chybu: ${response.status}`);
      }

      const data = await response.json()
      console.log("data ulozena", data);
      setChyba('');

    }
    catch (err) {

      setChyba("Neco se poakzilo");
      console.error(err);
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Jmeno:
          <input
            type="text"
            value={jmeno}
            onChange={(e) => setJmeno(e.target.value)}
          />
        </label>
        {chyba && <p style={{ color: 'red' }}>{chyba}</p>}
        <button type="submit">Odeslat</button>
      </form>
    </div>
  );
}

export default FormList;



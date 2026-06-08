import React, { useState } from 'react';


function FormList() {

    const [jmeno, setJmeno] = useState('');



    return (
        <>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert('Ahoj ' + jmeno);
                }}>
                    <label>
                        Jmeno:
                        <input
                            type="text"
                            value={jmeno}
                            onChange={(e) => setJmeno(e.target.value)}
                        />
                    </label>
                    <button type="submit">Odeslat</button>
                </form>
            </div>
        </>
    );

}

export default FormList;
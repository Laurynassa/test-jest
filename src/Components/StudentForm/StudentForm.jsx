import React ,{ useState } from 'react';

function StudentForm() {
  const [Vardas, setVardas]= useState('')
  const [Pavarde, setPavarde]= useState('')
  const [Pastas, setPastas]= useState('')
  const [Display, setDisplay]= useState('')
  
  const HandleSubmit =(e)=>{
    e.preventDefault()
    setDisplay({Vardas,Pavarde,Pastas})
  }

  return (
    <div >
        <form onSubmit={HandleSubmit}>
            <div>
            <p>Vardas:</p>
            <input type="text" value={Vardas} required onChange={(e)=> setVardas(e.target.value)}/>
            </div>
            <div>
            <p>Pavardė: </p>
            <input type="text" value={Pavarde} required onChange={(e)=> setPavarde(e.target.value)}/>
            </div>
            <div>
            <p>El.paštas:</p>
            <input type="email" value={Pastas} required  onChange={(e)=> setPastas(e.target.value)}/>
            </div>
            <br />
            <button type='submit'>Patvirtinti</button>
            <br />
        </form>
        <div>
            Result: {Display.Vardas} {Display.Pavarde} {Display.Pastas}
        </div>
    </div>
  );
}

export default StudentForm;
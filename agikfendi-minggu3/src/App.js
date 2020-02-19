import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>  
</nav>

<body>
  <div class = "container">
    <div class= "kartu">
       <div class='row'>
         <div class="col-md-4">
           <div class = "foto">
              <img src={require("../src/poltek.jpg")} alt="" width="300" height="auto"></img>
           </div>
         </div>
         <div class="col-md-8 kertas-biodata">
          <div class="biodata">
          <table width="100%" border="0"> 
          <div class="card">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row"></th>
                <th>Nama</th>
                <td>:</td>
                <td>Agik Fendi Harvyandha</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>TTL</th>
                <td>:</td>
                <td>Jombang, 03 Desember 1997</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Jeni Kelamin</th>
                <td>:</td>
                <td>Laki-laki</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Alamat</th>
                <td>:</td>
                <td>Jl S Supriadi Gg XI Sukun</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>No. Hp</th>
                <td>:</td>
                <td>085854418375</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Status</th>
                <td>:</td>
                <td>Mahasiswa</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Hobi</th>
                <td>:</td>
                <td>game</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Email</th>
                <td>:</td>
                <td>Agikfendih@gmail.com</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Github</th>
                <td>:</td>
                <td>AgikFendiHarvyandha</td>
              </tr>
            </tbody>
          </table>
        </div>
          </table>
          </div>
         </div>
       </div>
    </div>
  </div>



</body>

<footer>
  <p>Agikfendih@gmail.com</p>
</footer>

</div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
function App() {
  const [color, changeColor]=useState("#EEF");
  return (
    <div className="App">
      <div id="firstSet">
              <h1 id="Hi" style={{color: color}}>DANEL GREGOR BERTINI</h1>
          </div>
          <p></p>
          <button id="up" className="test">/\<p></p>/----\<p></p>/--------\</button><textarea size="20" name="comment" id="notes" ></textarea>
          <p></p>
          <button id="mid" className="test">/----------------\<p></p>/--------------------\<p></p>/------------------------\</button><textarea size="20" name="comment" id="notes" ></textarea>
          <p></p>
          <button id="down" className="test">/--------------------------\<p></p>\--------------------------/<p></p>\________________/</button><textarea size="20" name="comment" id="notes" ></textarea>


          <p id="demo"></p>
              <button onClick={()=> changeColor("#FFF")}>changeColor</button>






          <table>
              <thead>
                <tr>
                  <th>heading 1</th>
                  <th>heading 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">col 1</td>
                  <td rowspan="3">col 2</td>
                </tr>
                <tr>
                  <td>fuck</td>
                </tr>
                <tr>
                  <td>shit</td>
                </tr>
              </tbody>
              <tfoot>
                  <tr>
                    <td>summary of col 1</td>
                    <td>summary of col 2</td>
                  </tr>
                </tfoot>
            </table>
            <p>Moveable Text Box</p>
            <textarea rows="5" cols="20" name="comment"></textarea>

            <p className="stinky">Number Input</p>
            <input type="number" name="balance" />

            <p>Form</p>
            <form method="post" action="http://server1">
              Enter your name:
              <input type="text" name="fname"/>
              <br/>
              Enter your age:
              <input type="text" name="age"/>
              <br/>
              <input type="submit" value="Submit"/>
            </form>

            
            <p className="stinky poop">SLider</p>
            <input type="range" name="movie-rating" min="0" max="10" step="0.1"/>
            
            
            <p>Selection</p>
            <select name="rental-option">
              <option value="poo">Small</option>
              <option value="pee">Medium</option>
              <option value="shit">Large</option>
            </select>

              
              <p className="stinky">Datalist</p>
            <input list="ide"/>
              <datalist id="ide">
                  <option value="Visual Studio Code" />
                  <option value="Atom" />
                  <option value="Sublime Text" />
              </datalist>

              
              <p>Radio Button</p>
              <input name="delivery_option" type="radio" value="pickup" />
              <input name="delivery_option" type="radio" value="delivery" />
              
              
              <p>Label</p>
              <label for="password ">Password:</label>
              <input type="text" id="password" name="password"/>

              
              <p>Password Censoring</p>
              <input type="text" name="username" minlength="7" maxlength="150"/>
              <input type="password" name="password" required />

              
              <p>Pattern Validation</p>
              <form action="/action_page.php">
                  Country code: 
                  <input type="text" name="country_code" 
                        pattern="[A-Za-z]{2}" 
                        title="Two letter country code"/>
                  <input type="submit"/>
              </form>
  </div> 
  );
}

export default App;

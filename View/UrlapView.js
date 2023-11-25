class UrlapView {
  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");
    console.log(this.formElem);
    this.htmlOsszeallit();
  }

  htmlOsszeallit() {
    let txt = "";
    txt += `<div class="mb-3 mt-3">
                <label for="nev" class="form-label">Név:</label>
                <input type="text" class="form-control" 
                    id="nev" 
                    placeholder="Valaki Vagyok" 
                    name="nev">
             </div>`

    txt += `<div class="mb-3 mt-3">
                <label for="szul_ev" class="form-label">Születési év:</label>
                <input type="number" class="form-control" 
                    id="szul_ev" 
                    value="1975" 
                    min="1000" 
                    max="2500" 
                    name="szul_ev">
            </div>`  
            
            txt += `<div class="mb-3 mt-3">
                    <input type="submit"" 
                    id="submit" 
                    value="Küld"    
            </div>`  

  this.formElem.append(txt)       
  }
}
export default UrlapView;

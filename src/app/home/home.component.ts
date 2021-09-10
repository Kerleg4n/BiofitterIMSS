import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visibility = 'Show';
  content: any;
  dataList = [''];
  fileData: any;
  filePath: any;
  lengthG = 0;
  Groups = [1];
  plot = true;
  text = '';
  faTrashAlt = faTrashAlt;
  showData = true;
  showFileName = false;
  fileList: Labels[] = [];
  nameList = [''];

  experiments2: Data[] = [];
  experiments = {};
  series: Series[] = [];
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: any;
  yAxisLabel: any;
  legendTitle: any;
  timeline: boolean = true;
  showPlot: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  public items: Series[] = [];

  selectedModel = '';

  groupmo = '';
  groupP0 = '';
  groupM0 = '';
  groupkn = '';
  groupnc = '';
  groupkplus = '';
  groupkoff = '';
  groupkminus = '';
  groupk2 = '';
  groupn2 = '';
  grouptdecay = '';
  groupKM = '';
  groupKE = '';

  showmo = false;
  showP0 = false;
  showM0 = false;
  showkn = false;
  shownc = false;
  showkplus = false;
  showkoff = false;
  showkminus = false;
  showk2 = false;
  shown2 = false;
  showtdecay = false;
  showKM = false;
  showKE = false;

  showInputTextmo = false;
  showmoG = false;
  showmoC = false;

  showInputTextP0 = false;
  showP0G = false;
  showP0C = false;

  showInputTextM0 = false;
  showM0G = false;
  showM0C = false;

  showInputTextkn = false;
  showknG = false;
  showknC = false;

  showInputTextnc = false;
  showncG = false;
  showncC = false;

  showInputTextkplus = false;
  showkplusG = false;
  showkplusC = false;

  showInputTextkoff = false;
  showkoffG = false;
  showkoffC = false;

  showInputTextkminus = false;
  showkminusG = false;
  showkminusC = false;

  showInputTextk2 = false;
  showk2G = false;
  showk2C = false;

  showInputTextn2 = false;
  shown2G = false;
  shown2C = false;

  showInputTexttdecay = false;
  showtdecayG = false;
  showtdecayC = false;

  showInputTextKM = false;
  showKMG = false;
  showKMC = false;

  showInputTextKE = false;
  showKEG = false;
  showKEC = false;

  currentModel = 'none';
  currentOptionmo = '';
  currentOptionP0 = '';
  currentOptionM0 = '';
  currentOptionkn = '';
  currentOptionnc = '';
  currentOptionkplus = '';
  currentOptionkoff = '';
  currentOptionkminus = '';
  currentOptionk2 = '';
  currentOptionn2 = '';
  currentOptiontdecay = '';
  currentOptionKM = '';
  currentOptionKE = '';

  mo = '';
  P0 = '';
  M0 = '';
  kn = '';
  nc = '';
  kplus = '';
  koff = '';
  kminus = '';
  k2 = '';
  n2 = '';
  tdecay = '';
  KM = '';
  KE = '';

  selectChangeHandler(event: any) {
    this.selectedModel = event.target.value;
  }

  modelF(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = true;
    this.showkminus = true;
    this.showk2 = false;
    this.shown2 = false;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  modelFSN(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = true;
    this.showkminus = true;
    this.showk2 = true;
    this.shown2 = true;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  modelFSNGL(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = false;
    this.showkminus = true;
    this.showk2 = true;
    this.shown2 = true;
    this.showtdecay = true;
    this.showKM = false;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  modelMSSN(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = false;
    this.showkminus = false;
    this.showk2 = true;
    this.shown2 = true;
    this.showtdecay = false;
    this.showKM = true;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  modelNE(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = true;
    this.showkminus = false;
    this.showk2 = false;
    this.shown2 = false;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  modelSE(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = true;
    this.showkminus = false;
    this.showk2 = false;
    this.shown2 = false;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = true;
    this.currentModel = event.target.value;
  }

  modelSEF(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = false;
    this.showkminus = true;
    this.showk2 = false;
    this.shown2 = false;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = true;
    this.currentModel = event.target.value;
  }

  modelSESN(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = false;
    this.showkminus = false;
    this.showk2 = true;
    this.shown2 = true;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = true;
    this.currentModel = event.target.value;
  }

  modelSN(event: any) {
    this.showmo = true;
    this.showP0 = true;
    this.showM0 = true;
    this.showkn = true;
    this.shownc = true;
    this.showkplus = true;
    this.showkoff = false;
    this.showkminus = false;
    this.showk2 = true;
    this.shown2 = true;
    this.showtdecay = false;
    this.showKM = false;
    this.showKE = false;
    this.currentModel = event.target.value;
  }

  moBtn(event: any) {
    this.showInputTextmo = true;
    this.showmoG = false;
    this.showmoC = false;
    this.currentOptionmo = event.target.value;
  }

  moBtnC(event: any) {
    this.showInputTextmo = false;
    this.showmoC = true;
    this.showmoG = false;
    this.currentOptionmo = event.target.value;
  }

  moBtnG(event: any) {
    this.showInputTextmo = true;
    this.showmoC = false;
    this.showmoG = true;
    this.currentOptionmo = event.target.value;
  }

  P0Btn(event: any) {
    this.showInputTextP0 = true;
    this.showP0G = false;
    this.showP0C = false;
    this.currentOptionP0 = event.target.value;
  }

  P0BtnC(event: any) {
    this.showInputTextP0 = false;
    this.showP0C = true;
    this.showP0G = false;
    this.currentOptionP0 = event.target.value;
  }

  P0BtnG(event: any) {
    this.showInputTextP0 = true;
    this.showP0C = false;
    this.showP0G = true;
    this.currentOptionP0 = event.target.value;
  }

  M0Btn(event: any) {
    this.showInputTextM0 = true;
    this.showM0G = false;
    this.showM0C = false;
    this.currentOptionM0 = event.target.value;
  }

  M0BtnC(event: any) {
    this.showInputTextM0 = false;
    this.showM0C = true;
    this.showM0G = false;
    this.currentOptionM0 = event.target.value;
  }

  M0BtnG(event: any) {
    this.showInputTextM0 = true;
    this.showM0C = false;
    this.showM0G = true;
    this.currentOptionM0 = event.target.value;
  }

  knBtn(event: any) {
    this.showInputTextkn = true;
    this.showknG = false;
    this.showknC = false;
    this.currentOptionkn = event.target.value;
  }

  knBtnC(event: any) {
    this.showInputTextkn = false;
    this.showknC = true;
    this.showknG = false;
    this.currentOptionkn = event.target.value;
  }

  knBtnG(event: any) {
    this.showInputTextkn = true;
    this.showknC = false;
    this.showknG = true;
    this.currentOptionkn = event.target.value;
  }

  ncBtn(event: any) {
    this.showInputTextnc = true;
    this.showncG = false;
    this.showncC = false;
    this.currentOptionnc = event.target.value;
  }

  ncBtnC(event: any) {
    this.showInputTextnc = false;
    this.showncC = true;
    this.showncG = false;
    this.currentOptionnc = event.target.value;
  }

  ncBtnG(event: any) {
    this.showInputTextnc = true;
    this.showncC = false;
    this.showncG = true;
    this.currentOptionnc = event.target.value;
  }

  kplusBtn(event: any) {
    this.showInputTextkplus = true;
    this.showkplusG = false;
    this.showkplusC = false;
    this.currentOptionkplus = event.target.value;
  }

  kplusBtnC(event: any) {
    this.showInputTextkplus = false;
    this.showkplusC = true;
    this.showkplusG = false;
    this.currentOptionkplus = event.target.value;
  }

  kplusBtnG(event: any) {
    this.showInputTextkplus = true;
    this.showkplusC = false;
    this.showkplusG = true;
    this.currentOptionkplus = event.target.value;
  }

  koffBtn(event: any) {
    this.showInputTextkoff = true;
    this.showkoffG = false;
    this.showkoffC = false;
    this.currentOptionkoff = event.target.value;
  }

  koffBtnC(event: any) {
    this.showInputTextkoff = false;
    this.showkoffC = true;
    this.showkoffG = false;
    this.currentOptionkoff = event.target.value;
  }

  koffBtnG(event: any) {
    this.showInputTextkoff = true;
    this.showkoffC = false;
    this.showkoffG = true;
    this.currentOptionkoff = event.target.value;
  }

  kminusBtn(event: any) {
    this.showInputTextkminus = true;
    this.showkminusG = false;
    this.showkminusC = false;
    this.currentOptionkminus = event.target.value;
  }

  kminusBtnC(event: any) {
    this.showInputTextkminus = false;
    this.showkminusC = true;
    this.showkminusG = false;
    this.currentOptionkminus = event.target.value;
  }

  kminusBtnG(event: any) {
    this.showInputTextkminus = true;
    this.showkminusC = false;
    this.showkminusG = true;
    this.currentOptionkminus = event.target.value;
  }

  k2Btn(event: any) {
    this.showInputTextk2 = true;
    this.showk2G = false;
    this.showk2C = false;
    this.currentOptionk2 = event.target.value;
  }

  k2BtnC(event: any) {
    this.showInputTextk2 = false;
    this.showk2C = true;
    this.showk2G = false;
    this.currentOptionk2 = event.target.value;
  }

  k2BtnG(event: any) {
    this.showInputTextk2 = true;
    this.showk2C = false;
    this.showk2G = true;
    this.currentOptionk2 = event.target.value;
  }

  n2Btn(event: any) {
    this.showInputTextn2 = true;
    this.shown2G = false;
    this.shown2C = false;
    this.currentOptionn2 = event.target.value;
  }

  n2BtnC(event: any) {
    this.showInputTextn2 = false;
    this.shown2C = true;
    this.shown2G = false;
    this.currentOptionn2 = event.target.value;
  }

  n2BtnG(event: any) {
    this.showInputTextn2 = true;
    this.shown2C = false;
    this.shown2G = true;
    this.currentOptionn2 = event.target.value;
  }

  tdecayBtn(event: any) {
    this.showInputTexttdecay = true;
    this.showtdecayG = false;
    this.showtdecayC = false;
    this.currentOptiontdecay = event.target.value;
  }

  tdecayBtnC(event: any) {
    this.showInputTexttdecay = false;
    this.showtdecayC = true;
    this.showtdecayG = false;
    this.currentOptiontdecay = event.target.value;
  }

  tdecayBtnG(event: any) {
    this.showInputTexttdecay = true;
    this.showtdecayC = false;
    this.showtdecayG = true;
    this.currentOptiontdecay = event.target.value;
  }

  KMBtn(event: any) {
    this.showInputTextKM = true;
    this.showKMG = false;
    this.showKMC = false;
    this.currentOptionKM = event.target.value;
  }

  KMBtnC(event: any) {
    this.showInputTextKM = false;
    this.showKMC = true;
    this.showKMG = false;
    this.currentOptionKM = event.target.value;
  }

  KMBtnG(event: any) {
    this.showInputTextKM = true;
    this.showKMC = false;
    this.showKMG = true;
    this.currentOptionKM = event.target.value;
  }

  KEBtn(event: any) {
    this.showInputTextKE = true;
    this.showKEG = false;
    this.showKEC = false;
    this.currentOptionKE = event.target.value;
  }

  KEBtnC(event: any) {
    this.showInputTextKE = false;
    this.showKEC = true;
    this.showKEG = false;
    this.currentOptionKE = event.target.value;
  }

  KEBtnG(event: any) {
    this.showInputTextKE = true;
    this.showKEC = false;
    this.showKEG = true;
    this.currentOptionKE = event.target.value;
  }


  moGiven(event: any) {
    this.mo = event.target.value;
  }

  P0Given(event: any) {
    this.P0 = event.target.value;
  }

  M0Given(event: any) {
    this.M0 = event.target.value;
  }

  knGiven(event: any) {
    this.kn = event.target.value;
  }

  ncGiven(event: any) {
    this.nc = event.target.value;
  }

  kplusGiven(event: any) {
    this.kplus = event.target.value;
  }

  koffGiven(event: any) {
    this.koff = event.target.value;
  }

  kminusGiven(event: any) {
    this.kminus = event.target.value;
  }

  k2Given(event: any) {
    this.k2 = event.target.value;
  }

  n2Given(event: any) {
    this.n2 = event.target.value;
  }

  tdecayGiven(event: any) {
    this.tdecay = event.target.value;
  }

  KMGiven(event: any) {
    this.KM = event.target.value;
  }

  KEGiven(event: any) {
    this.KE = event.target.value;
  }

  selectedGroupmo(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupmo = event.target.value;
  }

  selectedGroupP0(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupP0 = event.target.value;
  }

  selectedGroupM0(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupM0 = event.target.value;
  }

  selectedGroupkn(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupkn = event.target.value;
  }

  selectedGroupnc(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupnc = event.target.value;
  }

  selectedGroupkplus(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupkplus = event.target.value;
  }

  selectedGroupkoff(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupkoff = event.target.value;
  }

  selectedGroupkminus(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupkminus = event.target.value;
  }

  selectedGroupk2(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupk2 = event.target.value;
  }

  selectedGroupn2(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupn2 = event.target.value;
  }

  selectedGrouptdecay(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.grouptdecay = event.target.value;
  }

  selectedGroupKM(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupKM = event.target.value;
  }

  selectedGroupKE(event: any){
    if (event.target.value == "Add group"){
      this.lengthG = this.Groups.length;
      this.Groups[this.lengthG] = this.lengthG + 1;
    }
    this.groupKE = event.target.value;
  }

  updatePlotData(){
    this.firestore.collection('users').doc(this.uploadService.token).collection('filesURL').get().subscribe(value => {
      value.forEach(doc => {
        this.content = doc.data()
        this.dataList.push(this.content.URL)
      })

      if(this.dataList[0] == ''){
        this.dataList.splice(0,1)
      }

      for(let i = 0; i < this.nameList.length; i++){
        fetch(this.dataList[i])
          .then(response => response.text())
          .then(data => {
            const csvToRowArray = data.split('\n');
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              const row = csvToRowArray[index].split('\t');
              this.items.push(new Series(row[0], parseFloat(row[1].trim())));
            }
            for (let j = 0; j < this.items.length; j++) {
              this.series[j] =
                {
                  "name": this.items[j].name,
                  "value": this.items[j].value
                }
            }
            this.experiments2[i] =
              {
                "name": this.nameList[i],
                "series": this.series
              }
            this.series = [];
            this.items = [];
          })
      }
    })
  }

  hideandshowPlot(event: any){
    if(event.target.value == 'Hide'){
      this.visibility = 'Show';
      this.showPlot = false;
      this.experiments2 = [];
    }
    if(event.target.value == 'Show'){
      this.visibility = 'Hide'
      this.showPlot = true;
    }
  }

  onFileSelected(event: any) {
    for (let file = 0; file < event.target.files.length; file++) {
      this.fileList.push(event.target.files[file]);
    }
    this.showFileName = true;
  }

  uploadFile(){
    for (let file = 0; file < this.fileList.length; file++) {
      this.fileData = this.fileList[file];
      this.filePath = `${this.uploadService.token}/${this.fileList[file].name}`;
      const fileRef = this.firestorage.ref(this.filePath);
      const task = this.firestorage.upload(this.filePath, this.fileData)
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.firestore.collection('users').doc(this.uploadService.token).collection('filesURL').doc(`${this.fileList[file].name}`).set({
              "URL": url
            });
          })
        })
      ).subscribe()
    }
  }

  deleteSelectedFile(event: any){
    const isSelecetedFile = (element: any) => element == event
    this.fileList.splice(this.fileList.findIndex(isSelecetedFile), 1);
  }

  deleteSerie(event: any){
    const isEqualSerie = (element: any) => element == event
    this.nameList.splice(this.nameList.findIndex(isEqualSerie), 1);

    this.firestore.collection('users').doc(this.uploadService.token).collection('filesURL').doc(event).delete();
    this.firestorage.ref(this.uploadService.token + '/' + event).delete();

  }

  plotXlabel(event: any){
    this.xAxisLabel = event.target.value;
  }

  plotYlabel(event: any){
    this.yAxisLabel = event.target.value;
  }

  plotTitle(event: any){
    this.legendTitle = event.target.value;
  }

  constructor(public uploadService: UploadService, private firestore: AngularFirestore, private firestorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.firestore.collection('users').doc(this.uploadService.token).collection('filesURL').snapshotChanges().subscribe(value => {
      value.forEach(doc => {
        if(this.nameList.every( (value, index) => value !== doc.payload.doc.id)){
          this.nameList.push(doc.payload.doc.id);
        }
      });
      if(this.nameList[0] == '' && this.nameList.length != 1){
        this.nameList.splice(0, 1)
      }
    })
  }

}

export class Data{
  name: string;
  series: Series[];

  constructor(name: string, series: Series[]){
    this.name = name;
    this.series = series;
  }
}

export class Labels{
  name: string;

  constructor(name: string){
    this.name = name;
  }
}

export class Series{
  name: string;
  value: number;

  constructor(name: string, value: number){
    this.name = name;
    this.value = value;
  }
}

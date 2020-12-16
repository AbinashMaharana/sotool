import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';
import { FieldConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'app-ciq-ru-details',
  templateUrl: './ciq-ru-details.component.html',
  styleUrls: ['./ciq-ru-details.component.css']
})
export class CiqRuDetailsComponent implements OnInit {
  fileType: any;
  importedFile: string;
  sampleFileName: string;
  supportedFiles: string;
  tooltipInfo: string;
  form: FormGroup = new FormGroup({});
  config: FieldConfig[];
  constructor(private rls: ResetLayoutService) {
    rls.initWithSiteDetails();
    this.fileType = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    this.importedFile = "Imported File";
    this.sampleFileName = "Sample File";
    this.supportedFiles = " .xls / .xlsx/ .xlsm";
    this.tooltipInfo = "Download sample files(s) to know content format";
    this.config = [
      {
        label: 'Choose the file with Customer Information Questionnarie(CIQ)',
        name: 'ciq',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample file to know content format. Please ensure the file being imported has configurations required for all gNodeBs and Edge Cloud device for this site',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      },
      {
        label: 'Choose the file with iBWave design',
        name: 'ibwave',
        fileName: 'Choose File',
        tooltipInfo : 'Download sample files(s) to know content format',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      },
      {
        label: 'Choose the file with all Radio Units and its gNodeB mapping',
        name: 'radioGnodebMap',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample file to know content format. Please ensure the file being imported has configurations required for all Radio Units (count should match with what has been imported in BOM) for this site',
        required: false,
        validations: [

        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}

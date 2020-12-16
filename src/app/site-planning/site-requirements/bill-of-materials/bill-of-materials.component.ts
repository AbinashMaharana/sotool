import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { ResetLayoutService } from "src/app/helper/reset-layout-element";
import { FieldConfig } from "src/app/models/FieldConfig";

@Component({
  selector: "app-bill-of-materials",
  templateUrl: "./bill-of-materials.component.html",
  styleUrls: ["./bill-of-materials.component.css"]
})
export class BillOfMaterialsComponent implements OnInit {
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
        label: 'Choose the file with Bill of Materials (BOM)',
        name: 'ciq',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample files(s) to know content format',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      }
    ]
  }

  ngOnInit(): void {

  }

}

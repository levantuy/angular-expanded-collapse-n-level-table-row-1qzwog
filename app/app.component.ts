import { Component, OnInit } from '@angular/core';

export let sampleData: Object[] = [
  {
    problems: [
      {
        Diabetes: [
          {
            medications: [
              {
                medicationsClasses: [
                  {
                    className: [
                      {
                        associatedDrug: [
                          {
                            name: 'asprin',
                            dose: '',
                            strength: '500 mg',
                          },
                        ],
                        'associatedDrug#2': [
                          {
                            name: 'somethingElse',
                            dose: '',
                            strength: '500 mg',
                          },
                        ],
                      },
                    ],
                    className2: [
                      {
                        associatedDrug: [
                          {
                            name: 'asprin',
                            dose: '',
                            strength: '500 mg',
                          },
                        ],
                        'associatedDrug#2': [
                          {
                            name: 'somethingElse',
                            dose: '',
                            strength: '500 mg',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            labs: [
              {
                missing_field: 'missing_value',
              },
            ],
          },
        ],
        Asthma: [{}],
      },
    ],
  },
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
       table {
         border: 1px solid red;
         border-collapse: separate;
       }
       tr, td {
         border: 1px solid black;
       }`,
  ],
})
export class AppComponent implements OnInit {
  sampleData = sampleData;
  items: any[];
  ngOnInit() {
    this.items = this.getItems(this.sampleData, null, 0);
  }

  expanded(item: any) {
    item.expanded = !item.expanded;
    this.items = this.getItems(this.sampleData, null, 0);
  }

  getItems(data, items, index) {
    data.forEach((x) => {
      if (!items) items = [];
      items.push(x);
      items[items.length - 1].index = index;
      Object.keys(x).forEach((title) => {
        if (typeof x[title] === 'object' && Array.isArray(x[title])) {
          this.getItems(x[title], items, index + 1);
        }
      });
    });
    items = items.map((x: any) => ({ ...x, titles: Object.keys(x) }));
    return items;
  }
}

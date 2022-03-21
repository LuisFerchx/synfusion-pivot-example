/**
 * Pivot Table Default Sample.
 */
 var fn_determina = function (args) {
  var newRow = [];
  var rowIndex = pivotObj.engineModule.pivotValues.length;
  var length =
      pivotObj.engineModule.pivotValues[
      pivotObj.engineModule.pivotValues.length - 1
          ].length;
  var gTotal =
      pivotObj.engineModule.pivotValues[
      pivotObj.engineModule.pivotValues.length - 1
          ];
  for (var i = 0; i < length - 1; i++) {
      if (i !== 0) {
          for (var j = 0; j < data.length; j++) {
              if (data[j].cue_nombre == gTotal[i].columnHeaders) {
                  newRow.push({
                      axis: 'value',
                      value: data[j].saldoinicial,
                      actualValue: data[j].saldoinicial,
                      formattedText: data[j].saldoinicial,
                      isGrandSum: false,
                      isSum: true,
                      showSubTotals: true,
                      colIndex: i,
                      rowIndex: rowIndex,
                      rowHeaders: 'New Row',
                      actualText: gTotal[i].actualText,
                      columnHeaders: gTotal[i].columnHeaders,
                  });
              }
          }
      } else {
          newRow.push({
              axis: 'row',
              formattedText: 'SALDO INICIAL',
              colIndex: i,
              rowIndex: rowIndex,
              isDrilled: false,
              level: 0,
              hasChild: false,
              valueSort: {
                  'SALDO INICIAL': 1,
                  levelName: 'SALDO INICIAL',
              },
          });
      }
  }
  pivotObj.engineModule.valueContent.splice(0, 0, newRow);
  pivotObj.engineModule.pivotValues.splice(
      pivotObj.engineModule.valueContent[0][0].rowIndex,
      0,
      newRow
  );
}

ej.base.enableRipple(false);
var pivotObj = new ej.pivotview.PivotView({
  dataSourceSettings: {
    dataSource: getPivotData(),
    columns: [
      { name: 'cue_nombre', caption: 'Cuentas Patrimonio' },
    ],
    values: [{ name: 'det_valor', caption: 'valor' }],
    rows: [{ name: 'cue_nombrecolum' }],
    filters: [],
    formatSettings: {},
    enableSorting: true,
    allowLabelFilter: true,
    allowValueFilter: true,
    drilledMembers: {},
    emptyCellsTextContent: '0',
    showHeaderWhenEmpty: false,
  },
  width: '100%',
  height: 290,
  enginePopulated: this.fn_determina,
  gridSettings: { columnWidth: 140 },
  displayOption: { view: 'Both' },
  chartSettings: {
    value: 'Amount',
    enableExport: true,
    chartSeries: { type: 'Column', animation: { enable: false } },
    enableMultipleAxis: false,
  },
  toolbar: ['Export', 'GrandTotal', 'FieldList'],
  allowExcelExport: true,
  allowConditionalFormatting: true,
  allowPdfExport: true,
  showToolbar: true,
  allowCalculatedField: true,
  showFieldList: true,
});
pivotObj.appendTo('#PivotView');
function getPivotData() {
  var pivotData = [
    {
      cue_id: 89,
      cue_codigov: '32.01.01.02',
      cue_nombre: 'Utilidad del periodo',
      saldoinicial: '100.0000',
      cue_id_prin: 89,
      det_valor: '-10.0000',
      cue_nombrecolum: 'Utilidad acumulada ejercicios ',
    },
    {
      cue_id: 89,
      cue_codigov: '32.01.01.02',
      cue_nombre: 'Utilidad del periodo',
      saldoinicial: '100.0000',
      cue_id_prin: 89,
      det_valor: '-50.0000',
      cue_nombrecolum: 'Utilidad acumulada ejercicios ',
    },
    {
      cue_id: 88,
      cue_codigov: '32.01.01.01',
      cue_nombre: 'Utilidad acumulada e',
      saldoinicial: '100.0000',
      cue_id_prin: 88,
      det_valor: '10.0000',
      cue_nombrecolum: 'Utilidad del periodo',
    },
    {
      cue_id: 88,
      cue_codigov: '32.01.01.01',
      cue_nombre: 'Utilidad acumulada e',
      saldoinicial: '100.0000',
      cue_id_prin: 88,
      det_valor: '50.0000',
      cue_nombrecolum: 'Utilidad del periodo',
    },
    {
      cue_id: 83,
      cue_codigov: '41.01.05',
      cue_nombre: 'Ventas tarifa 0%',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 85,
      cue_codigov: '32',
      cue_nombre: 'RESULTADOS',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 78,
      cue_codigov: '41',
      cue_nombre: 'VENTAR NETAS',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 80,
      cue_codigov: '41.01.04',
      cue_nombre: 'Ventas tarifa 12%',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 67,
      cue_codigov: '4',
      cue_nombre: 'INGRESOS',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 79,
      cue_codigov: '41.01',
      cue_nombre: 'VENTAS BRUTAS',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 84,
      cue_codigov: '3',
      cue_nombre: 'Patrimonio',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 86,
      cue_codigov: '32.01',
      cue_nombre: 'UTILIDADES',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
    {
      cue_id: 87,
      cue_codigov: '32.01.01',
      cue_nombre: 'Utilidades acumulada',
      saldoinicial: '0',
      cue_id_prin: null,
      det_valor: '0',
      cue_nombrecolum: null,
    },
  ];
  return pivotData;
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ExcelJS from 'exceljs';
import {} from '../../pages/Dashboard';



const generateExcel = async (data, fileName) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  // Add headers
  worksheet.columns = [
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
    { header: 'City', key: 'city' },
  ];

  // Add data rows
  data.forEach((row) => {
    worksheet.addRow(row);
  });

  // Save the file
  await workbook.xlsx.writeFile(`${fileName}.xlsx`);
  console.log('Excel file generated successfully!');
};

export function QuickActions() {


  
  const handleDownload = () => {
    generateExcel(data, 'UserReport');
  };
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
          <span>Generate Report</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <button className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
          <span>Invite Team Member</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <button className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
          <span>Update Billing</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
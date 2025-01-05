
import { BarChart3, Users, DollarSign } from "lucide-react";
import Chart from "react-apexcharts";
import { StatsCard } from "../components/StatsCard";
import { RecentUsers } from "../components/RecentUsers";
import { QuickActions } from "../components/dashboard/QuickActions";
import "./Dashboard.css";

const primary = {
  500: "#1D4ED8",
  300: "#93C5FD"
};

const neutral = {
  500: "#6B7280",
  300: "#D1D5DB"
};

export const Dashboard = () => {



  return (
    <div id="webcrumbs" className="w-full h-full p-4">  
      <div className='bg-white rounded-lg shadow w-full h-full p-10'>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 font-title">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back, Admin</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Total Users" value="12,345" icon={Users} trend={12} />
          <StatsCard title="Monthly Revenue" value="$54,321" icon={DollarSign} trend={8} />
          <StatsCard title="Active Sessions" value="2,456" icon={BarChart3} trend={-3} />
        </div>
        <QuickActions />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Org1', 'Org2', 'Org3', 'Org4', 'Org5'] },
              title: { text: 'Admins per Organization' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="donut" 
            series={[35, 25, 20, 10, 10]} 
            options={{
              chart: { toolbar: { show: false } },
              labels: ['Online', 'Offline', 'Busy', 'Away', 'Other'],
              title: { text: 'Agent Status Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="pie" 
            series={[30, 40, 20, 10]} 
            options={{
              chart: { toolbar: { show: false } },
              labels: ['Model A', 'Model B', 'Model C', 'Model D'],
              title: { text: 'Agent Model Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [50, 30, 20, 40, 60] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Inbound', 'Outbound', 'Internal', 'External', 'Other'] },
              title: { text: 'Call Type Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [70, 20, 10, 50, 30] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Completed', 'Missed', 'Abandoned', 'In-Progress', 'Other'] },
              title: { text: 'Call Status Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [5, 10, 15, 20, 25] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Call Duration Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [2, 4, 6, 8, 10] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Call Duration by Agent' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[
              { name: 'Total Calls', data: [30, 40, 35, 50, 49, 60, 70] },
              { name: 'Completed Calls', data: [20, 30, 25, 40, 39, 50, 60] }
            ]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls vs Completed Calls' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Missed Calls', data: [5, 10, 15, 20, 25, 30, 35] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Missed Calls Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'AI Success Rate', data: [80, 85, 90, 95, 92, 88, 85] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'AI Success Rate Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'AI Calls Handled', data: [10, 20, 30, 40, 50, 60, 70] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'AI Calls Handled Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Average Response Time', data: [2, 3, 4, 5, 4, 3, 2] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Average Response Time Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['1', '2', '3', '4', '5'] },
              title: { text: 'Satisfaction Score Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['1', '2', '3', '4', '5'] },
              title: { text: 'Sentiment Score Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="scatter" 
            series={[{ name: 'Satisfaction vs Sentiment', data: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { title: { text: 'Satisfaction' } },
              yaxis: { title: { text: 'Sentiment' } },
              title: { text: 'Satisfaction vs Sentiment Correlation' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Calls Handled by Agent' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [4, 3, 5, 2, 1] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Satisfaction Score by Agent' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [2, 3, 4, 5, 4] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Response Time by Agent' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Total Calls', data: [30, 40, 35, 50, 49, 60, 70] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[
              { name: 'Inbound Calls', data: [10, 20, 30, 40, 50] },
              { name: 'Outbound Calls', data: [5, 15, 25, 35, 45] }
            ]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
              title: { text: 'Inbound vs Outbound Calls' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Peak Hours', data: [5, 10, 15, 20, 25, 30, 35] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'] },
              title: { text: 'Peak Hours Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Average Wait Time', data: [2, 3, 4, 5, 4, 3, 2] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Average Wait Time Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Max Queue Length', data: [5, 10, 15, 20, 25, 30, 35] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Max Queue Length Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Abandoned Calls', data: [1, 2, 3, 4, 5, 6, 7] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Abandoned Calls Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Service Level Percentage', data: [90, 85, 80, 75, 70, 65, 60] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Service Level Percentage Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[{ name: 'Conversion Rate', data: [5, 10, 15, 20, 25, 30, 35] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Conversion Rate Over Time' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="line" 
            series={[
              { name: 'Total Calls', data: [30, 40, 35, 50, 49, 60, 70] },
              { name: 'Total Conversions', data: [10, 20, 15, 30, 29, 40, 50] }
            ]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls vs Total Conversions' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Interaction A', 'Interaction B', 'Interaction C', 'Interaction D', 'Interaction E'] },
              title: { text: 'Interaction Type Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [5, 10, 15, 20, 25] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Interaction Duration Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'] },
              title: { text: 'Call Category Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [2, 3, 4, 5, 4]}]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Resolution Time Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [10, 20, 30, 40, 50] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Yes', 'No'] },
              title: { text: 'Follow-Up Required Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
          <Chart 
            type="bar" 
            series={[{ data: [100, 200, 300, 400, 500] }]} 
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-100', '100-200', '200-300', '300-400', '400+'] },
              title: { text: 'Transcript Length Distribution' }
            }} 
            width="100%" 
            height="300px" 
          />
        </div>
        <RecentUsers />
      </div>
    </div>
  )
};
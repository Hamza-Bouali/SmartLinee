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

// Static data for charts
export const staticData = {
  adminsPerOrg: [10, 20, 30, 40, 50],
  agentStatus: [35, 25, 20, 10, 10],
  agentModel: [30, 40, 20, 10],
  callType: [50, 30, 20, 40, 60],
  callStatus: [70, 20, 10, 50, 30],
  callDuration: [5, 10, 15, 20, 25],
  avgCallDurationByAgent: [2, 4, 6, 8, 10],
  totalVsCompletedCalls: {
    total: [30, 40, 35, 50, 49, 60, 70],
    completed: [20, 30, 25, 40, 39, 50, 60],
  },
  missedCallsOverTime: [5, 10, 15, 20, 25, 30, 35],
  aiSuccessRate: [80, 85, 90, 95, 92, 88, 85],
  aiCallsHandled: [10, 20, 30, 40, 50, 60, 70],
  avgResponseTime: [2, 3, 4, 5, 4, 3, 2],
  satisfactionScore: [10, 20, 30, 40, 50],
  sentimentScore: [10, 20, 30, 40, 50],
  satisfactionVsSentiment: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
  callsHandledByAgent: [10, 20, 30, 40, 50],
  avgSatisfactionByAgent: [4, 3, 5, 2, 1],
  avgResponseTimeByAgent: [2, 3, 4, 5, 4],
  totalCallsOverTime: [30, 40, 35, 50, 49, 60, 70],
  inboundVsOutbound: {
    inbound: [10, 20, 30, 40, 50],
    outbound: [5, 15, 25, 35, 45],
  },
  peakHours: [5, 10, 15, 20, 25, 30, 35],
  avgWaitTime: [2, 3, 4, 5, 4, 3, 2],
  maxQueueLength: [5, 10, 15, 20, 25, 30, 35],
  abandonedCalls: [1, 2, 3, 4, 5, 6, 7],
  serviceLevelPercentage: [90, 85, 80, 75, 70, 65, 60],
  conversionRate: [5, 10, 15, 20, 25, 30, 35],
  totalCallsVsConversions: {
    totalCalls: [30, 40, 35, 50, 49, 60, 70],
    conversions: [10, 20, 15, 30, 29, 40, 50],
  },
  interactionType: [10, 20, 30, 40, 50],
  interactionDuration: [5, 10, 15, 20, 25],
  callCategory: [10, 20, 30, 40, 50],
  resolutionTime: [2, 3, 4, 5, 4],
  followUpRequired: [10, 20, 30, 40, 50],
  transcriptLength: [100, 200, 300, 400, 500],
};

export const Dashboard = () => {
  return (
    <div id="webcrumbs" className="w-full h-full p-4">
      <div className="bg-white rounded-lg shadow w-full h-full p-10">
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
          {/* Admins per Organization */}
          <Chart
            type="bar"
            series={[{ data: staticData.adminsPerOrg }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Org1', 'Org2', 'Org3', 'Org4', 'Org5'] },
              title: { text: 'Admins per Organization' }
            }}
            width="100%"
            height="300px"
          />

          {/* Agent Status Distribution */}
          <Chart
            type="donut"
            series={staticData.agentStatus}
            options={{
              chart: { toolbar: { show: false } },
              labels: ['Online', 'Offline', 'Busy', 'Away', 'Other'],
              title: { text: 'Agent Status Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Agent Model Distribution */}
          <Chart
            type="pie"
            series={staticData.agentModel}
            options={{
              chart: { toolbar: { show: false } },
              labels: ['Model A', 'Model B', 'Model C', 'Model D'],
              title: { text: 'Agent Model Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Call Type Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.callType }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Inbound', 'Outbound', 'Internal', 'External', 'Other'] },
              title: { text: 'Call Type Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Call Status Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.callStatus }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Completed', 'Missed', 'Abandoned', 'In-Progress', 'Other'] },
              title: { text: 'Call Status Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Call Duration Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.callDuration }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Call Duration Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Average Call Duration by Agent */}
          <Chart
            type="bar"
            series={[{ data: staticData.avgCallDurationByAgent }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Call Duration by Agent' }
            }}
            width="100%"
            height="300px"
          />

          {/* Total Calls vs Completed Calls */}
          <Chart
            type="line"
            series={[
              { name: 'Total Calls', data: staticData.totalVsCompletedCalls.total },
              { name: 'Completed Calls', data: staticData.totalVsCompletedCalls.completed }
            ]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls vs Completed Calls' }
            }}
            width="100%"
            height="300px"
          />

          {/* Missed Calls Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Missed Calls', data: staticData.missedCallsOverTime }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Missed Calls Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* AI Success Rate Over Time */}
          <Chart
            type="line"
            series={[{ name: 'AI Success Rate', data: staticData.aiSuccessRate }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'AI Success Rate Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* AI Calls Handled Over Time */}
          <Chart
            type="line"
            series={[{ name: 'AI Calls Handled', data: staticData.aiCallsHandled }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'AI Calls Handled Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Average Response Time Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Average Response Time', data: staticData.avgResponseTime }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Average Response Time Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Satisfaction Score Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.satisfactionScore }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['1', '2', '3', '4', '5'] },
              title: { text: 'Satisfaction Score Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Sentiment Score Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.sentimentScore }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['1', '2', '3', '4', '5'] },
              title: { text: 'Sentiment Score Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Satisfaction vs Sentiment Correlation */}
          <Chart
            type="scatter"
            series={[{ name: 'Satisfaction vs Sentiment', data: staticData.satisfactionVsSentiment }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { title: { text: 'Satisfaction' } },
              yaxis: { title: { text: 'Sentiment' } },
              title: { text: 'Satisfaction vs Sentiment Correlation' }
            }}
            width="100%"
            height="300px"
          />

          {/* Calls Handled by Agent */}
          <Chart
            type="bar"
            series={[{ data: staticData.callsHandledByAgent }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Calls Handled by Agent' }
            }}
            width="100%"
            height="300px"
          />

          {/* Average Satisfaction Score by Agent */}
          <Chart
            type="bar"
            series={[{ data: staticData.avgSatisfactionByAgent }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Satisfaction Score by Agent' }
            }}
            width="100%"
            height="300px"
          />

          {/* Average Response Time by Agent */}
          <Chart
            type="bar"
            series={[{ data: staticData.avgResponseTimeByAgent }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'] },
              title: { text: 'Average Response Time by Agent' }
            }}
            width="100%"
            height="300px"
          />

          {/* Total Calls Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Total Calls', data: staticData.totalCallsOverTime }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Inbound vs Outbound Calls */}
          <Chart
            type="bar"
            series={[
              { name: 'Inbound Calls', data: staticData.inboundVsOutbound.inbound },
              { name: 'Outbound Calls', data: staticData.inboundVsOutbound.outbound }
            ]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
              title: { text: 'Inbound vs Outbound Calls' }
            }}
            width="100%"
            height="300px"
          />

          {/* Peak Hours Distribution */}
          <Chart
            type="line"
            series={[{ name: 'Peak Hours', data: staticData.peakHours }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'] },
              title: { text: 'Peak Hours Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Average Wait Time Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Average Wait Time', data: staticData.avgWaitTime }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Average Wait Time Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Max Queue Length Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Max Queue Length', data: staticData.maxQueueLength }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Max Queue Length Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Abandoned Calls Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Abandoned Calls', data: staticData.abandonedCalls }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Abandoned Calls Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Service Level Percentage Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Service Level Percentage', data: staticData.serviceLevelPercentage }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Service Level Percentage Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Conversion Rate Over Time */}
          <Chart
            type="line"
            series={[{ name: 'Conversion Rate', data: staticData.conversionRate }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Conversion Rate Over Time' }
            }}
            width="100%"
            height="300px"
          />

          {/* Total Calls vs Total Conversions */}
          <Chart
            type="line"
            series={[
              { name: 'Total Calls', data: staticData.totalCallsVsConversions.totalCalls },
              { name: 'Total Conversions', data: staticData.totalCallsVsConversions.conversions }
            ]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
              title: { text: 'Total Calls vs Total Conversions' }
            }}
            width="100%"
            height="300px"
          />

          {/* Interaction Type Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.interactionType }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Interaction A', 'Interaction B', 'Interaction C', 'Interaction D', 'Interaction E'] },
              title: { text: 'Interaction Type Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Interaction Duration Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.interactionDuration }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Interaction Duration Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Call Category Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.callCategory }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'] },
              title: { text: 'Call Category Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Resolution Time Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.resolutionTime }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['0-1 min', '1-2 min', '2-3 min', '3-4 min', '4+ min'] },
              title: { text: 'Resolution Time Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Follow-Up Required Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.followUpRequired }]}
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: ['Yes', 'No'] },
              title: { text: 'Follow-Up Required Distribution' }
            }}
            width="100%"
            height="300px"
          />

          {/* Transcript Length Distribution */}
          <Chart
            type="bar"
            series={[{ data: staticData.transcriptLength }]}
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
  );
};
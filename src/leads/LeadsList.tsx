import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import axios from 'axios';

interface Lead {
  LeadID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  CompanyName: string;
  JobTitle: string;
  LeadSource: string;
  LeadStatus: string;
}

const LeadsList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/leads/');
        setLeads(response.data);
      } catch (err) {
        setError('Failed to fetch leads');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) {
    return <p>Loading leads...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Leads</h2>
      <div className="space-y-4">
        {leads.map((lead) => (
          <div key={lead.LeadID} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">{`${lead.FirstName} ${lead.LastName}`}</p>
                <p className="text-sm text-gray-500">Source: {lead.LeadSource}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-medium ${
                  lead.LeadStatus === 'New' ? 'text-red-500' : 'text-yellow-500'
                }`}
              >
                {lead.LeadStatus}
              </p>
              <p className="text-sm text-gray-500">{lead.CompanyName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsList;
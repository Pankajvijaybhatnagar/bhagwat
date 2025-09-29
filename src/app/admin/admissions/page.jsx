'use client';

import { useEffect, useState, Suspense } from 'react';
import { getAllAdmissions, updateAdmissionStatus, deleteAdmission } from '@/utils/api';
import { useSearchParams } from 'next/navigation';

function AdmissionsContent() {
  const searchParams = useSearchParams();
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState(searchParams.get('status') || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdmission, setSelectedAdmission] = useState(null);

  useEffect(() => {
    fetchAdmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, selectedStatus]);

  const fetchAdmissions = async () => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');
    try {
      const result = await getAllAdmissions(token, currentPage, 10, selectedStatus, searchTerm);

      if (result.success && result.data.success) {
        setAdmissions(result.data.data);
        setPagination(result.data.pagination);
      }
    } catch (error) {
      console.error('Error fetching admissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem('adminToken');
    try {
      const result = await updateAdmissionStatus(token, id, newStatus);
      if (result.success) {
        fetchAdmissions();
        alert('Status updated successfully!');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this admission?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const result = await deleteAdmission(token, id);
      if (result.success) {
        fetchAdmissions();
        alert('Admission deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting admission:', error);
      alert('Failed to delete admission');
    }
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admissions</h1>
          <p className="mt-1 text-sm text-gray-600">Manage all admission applications</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchAdmissions()}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={fetchAdmissions}
              className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Admissions Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
        ) : admissions.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No admissions found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your filters</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admissions.map((admission) => (
                <tr key={admission.id}>
                  <td className="px-6 py-4">{admission.student_name}</td>
                  <td className="px-6 py-4">{admission.email_address}</td>
                  <td className="px-6 py-4">{admission.course}</td>
                  <td className="px-6 py-4">{new Date(admission.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <select
                      value={admission.status}
                      onChange={(e) => handleStatusChange(admission.id, e.target.value)}
                      className={`px-3 py-1 text-xs rounded-full ${statusColors[admission.status]}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedAdmission(admission)}
                      className="text-amber-600 hover:text-amber-900 mr-3"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(admission.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {selectedAdmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Admission Details</h3>
            <p><strong>Name:</strong> {selectedAdmission.student_name}</p>
            <p><strong>Father:</strong> {selectedAdmission.father_name}</p>
            <p><strong>Email:</strong> {selectedAdmission.email_address}</p>
            <button
              onClick={() => setSelectedAdmission(null)}
              className="mt-4 bg-gray-200 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminAdmissions() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <AdmissionsContent />
    </Suspense>
  );
}

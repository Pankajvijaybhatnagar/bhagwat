// utils/api.js (Frontend - Next.js)

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost/admission-api/api";

/**
 * Generic request function
 */
async function request(
  endpoint,
  { method = "GET", token = null, body = null, isForm = false } = {}
) {
  try {
    const headers = {};

    if (!isForm) {
      headers["Content-Type"] = "application/json";
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? (isForm ? body : JSON.stringify(body)) : null,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        message: data?.message || "Request failed",
      };
    }

    return { success: true, status: res.status, data };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error.message || "Unexpected error occurred",
    };
  }
}

//
// ---------- SETUP ROUTES ----------
//
export const installDatabase = () =>
  request("/setup/install", { method: "POST" });

export const checkSetupStatus = () =>
  request("/setup/status", { method: "GET" });

export const resetDatabase = () =>
  request("/setup/reset", { method: "POST" });

//
// ---------- AUTH ROUTES ----------
//
export const loginAdmin = (email, password) =>
  request("/auth/login", {
    method: "POST",
    body: { email, password },
  });

export const registerAdmin = (data) =>
  request("/auth/register", {
    method: "POST",
    body: data,
  });

export const verifyToken = (token) =>
  request("/auth/verify", { method: "GET", token });

//
// ---------- PUBLIC ROUTES ----------
//
export const submitAdmission = (formData) =>
  request("/admission", {
    method: "POST",
    body: formData,
    isForm: true,
  });

//
// ---------- ADMIN - ADMISSIONS ----------
//
export const getAllAdmissions = (token, page = 1, limit = 10) =>
  request(`/admin/admissions?page=${page}&limit=${limit}`, { token });

export const getSingleAdmission = (token, id) =>
  request(`/admin/admission/${id}`, { token });

export const updateAdmissionStatus = (token, id, status) =>
  request(`/admin/admission/${id}/status`, {
    method: "PUT",
    token,
    body: { status },
  });

export const deleteAdmission = (token, id) =>
  request(`/admin/admission/${id}`, { method: "DELETE", token });

//
// ---------- ADMIN - EXPORT ----------
//
export const exportCSV = (token) =>
  request("/admin/export/csv", { token });

export const exportExcel = (token) =>
  request("/admin/export/excel", { token });

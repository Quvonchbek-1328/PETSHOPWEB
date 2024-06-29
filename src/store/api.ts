// District
import axios from "@/store/axios";
import {District, FAQ, Feedback, Job, JobCategory, Region, Worker} from "@/types";

export async function getDistricts() {
  const {data} = await axios.get<District[]>("/api/District/GetAll");
  return data;
}

export async function getDistrictById(id: string) {
  const {data} = await axios.get<District>(`/api/District/GetById/${id}`);
  return data;
}

export async function getDistrictsByRegionId(regionId: string) {
  const {data} = await axios.get<District[]>(`/api/District/GetByRegionId/${regionId}`);
  return data;
}

// Region
export async function getRegions() {
  const {data} = await axios.get<Region[]>("/api/Region/GetAll");
  return data;
}

export async function getRegionById(id: string) {
  const {data} = await axios.get<Region>(`/api/Region/GetById/${id}`);
  return data;
}

// FAQ
export async function getFaqs() {
  const {data} = await axios.get<FAQ[]>("/api/FAQ/GetAll");
  return data;
}

// Feedback
export async function getFeedbacks() {
  const {data} = await axios.get<Feedback[]>("/api/Feedback/GetAll");
  return data;
}

// Job Category
export async function getJobCategories() {
  const {data} = await axios.get<JobCategory[]>("/api/JobCategory/GetAll");
  return data;
}

export async function getJobCategoryById(id: string) {
  const {data} = await axios.get<JobCategory>(`/api/JobCategory/GetById/${id}`);
  return data;
}

//Job
export async function getTopJobs() {
  const {data} = await axios.get<Job[]>("/api/Job/GetTopJobs");
  return data;
}

export async function getJobs() {
  const {data} = await axios.get<Job[]>("/api/Job/GetAll");
  return data;
}

export async function getJobById(id: string) {
  const {data} = await axios.get<Job>(`/api/Job/GetById/${id}`);
  return data;
}

export const getCountFilteredJobs = async (params: Map<string, string>): Promise<number> => {
  const {data} = await axios.get(`/api/Job/GetCountForFilter?${getQuery(params)}`);
  return data;
};

export const getCountJobsForCategory = async (id: string): Promise<number> => {
  const {data} = await axios.get(`/api/Job/GetCountForFilter?jobCategoryId=${id}`);
  return data;
}

export const getAllJobsFiltered = async (params: Map<string, string>) => {
  const {data} = await axios.get(`/api/Job/GetAll?${getQuery(params)}`)
  return data;
}

export const getJobByCategoryId = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<Job[]> => {
  const {data} = await axios.get(
    `/api/Job/GetAll?jobCategoryId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// Worker
export async function getTopWorkers() {
  const {data} = await axios.get<Worker[]>("/api/Worker/GetTopWorkers");
  return data;
}

export async function getWorkerById(id: string) {
  const {data} = await axios.get<Worker>(`/api/Worker/GetById/${id}`);
  return data;
}

export const getWorkersByCategoryId = async (id: string): Promise<Worker[]> => {
  const {data} = await axios.get(`/api/Worker/GetAll?jobCategoryId=${id}`);
  return data;
}

export const getExperienceByUserId = async (id: string) => {
  const {data} = await axios.get(`/api/Experience/GetByUserId/${id}`);
  return data;
}

export const getCountFilteredWorkers = async (params: Map<string, string>): Promise<number> => {
  const {data} = await axios.get(`/api/Worker/GetCountForFilter?${getQuery(params)}`);
  return data;
}
export const getAllWorkersFiltered = async (params: Map<string, string>) => {
  const {data} = await axios.get(`/api/Worker/GetAll?${getQuery(params)}`)
  return data;
}

const getQuery = (params: Map<string, string>): string => {
  return Array.from(params.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
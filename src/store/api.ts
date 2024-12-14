// District
import axios from "@/store/axios";
import {District, FAQ, Feedback, Pet, PetCategory, Region, Seller} from "@/types";

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
export async function getPetCategories() {
  const {data} = await axios.get<PetCategory[]>("/api/PetCategory/GetAll");
  return data;
}

export async function getPetCategoryById(id: string) {
  const {data} = await axios.get<PetCategory>(`/api/PetCategory/GetById/${id}`);
  return data;
}

//Job
export async function getTopPets() {
  const {data} = await axios.get<Pet[]>("/api/Pet/GetTopPets");
  return data;
}

export async function getJobs() {
  const {data} = await axios.get<Pet[]>("/api/Pet/GetAll");
  return data;
}

export async function getPetById(id: string) {
  const {data} = await axios.get<Pet>(`/api/Pet/GetById/${id}`);
  return data;
}

export const getCountFilteredPets = async (params: Map<string, string>): Promise<number> => {
  const {data} = await axios.get(`/api/Pet/GetCountForFilter?${getQuery(params)}`);
  return data;
};

export const getCountPetsForCategory = async (id: string): Promise<number> => {
  const {data} = await axios.get(`/api/Pet/GetCountForFilter?petCategoryId=${id}`);
  return data;
}

export const getAllPetsFiltered = async (params: Map<string, string>) => {
  const {data} = await axios.get(`/api/Pet/GetAll?${getQuery(params)}`)
  return data;
}

export const getPetByCategoryId = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<Pet[]> => {
  const {data} = await axios.get(
    `/api/Pet/GetAll?jobCategoryId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// Worker
export async function getTopSellers() {
  const {data} = await axios.get<Seller[]>("/api/Seller/GetTopSellers");
  return data;
}

export async function getSellerById(id: string) {
  const {data} = await axios.get<Seller>(`/api/Seller/GetById/${id}`);
  return data;
}

export const getSellersByCategoryId = async (id: string): Promise<Seller[]> => {
  const {data} = await axios.get(`/api/Seller/GetAll?petCategoryId=${id}`);
  return data;
}

export const getProductByUserId = async (id: string) => {
  const {data} = await axios.get(`/api/Product/GetByUserId/${id}`);
  return data;
}

export const getCountFilteredSellers = async (params: Map<string, string>): Promise<number> => {
  const {data} = await axios.get(`/api/Seller/GetCountForFilter?${getQuery(params)}`);
  return data;
}
export const getAllSellersFiltered = async (params: Map<string, string>) => {
  const {data} = await axios.get(`/api/Seller/GetAll?${getQuery(params)}`)
  return data;
}

const getQuery = (params: Map<string, string>): string => {
  return Array.from(params.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface AuthorDto {
  id?: string;
  name?: string;
  birthDate?: string;
  shortBio?: string;
}

export interface CreateAuthorDto {
  name: string;
  birthDate: string;
  shortBio?: string;
}

export interface GetAuthorListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface UpdateAuthorDto {
  name: string;
  birthDate: string;
  shortBio?: string;
}

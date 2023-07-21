import { CustomerInterface } from 'interfaces/customer';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  customer_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  organization_id?: string;
}

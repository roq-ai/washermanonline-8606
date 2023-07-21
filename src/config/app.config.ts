interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Laundry Staff', 'Delivery Personnel', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'washermanonline',
  addOns: [],
};

import Form from '@/app/ui/users/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'User Creation',
};

// literally 
 
export default async function Page() { 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Create User',
            href: '/dashboard/user/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}
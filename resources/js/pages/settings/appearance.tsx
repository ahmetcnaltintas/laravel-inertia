import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/admin/appearance-tabs';
import HeadingSmall from '@/components/admin/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/admin/layouts/app-layout';
import SettingsLayout from '@/admin/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Görünüm Ayarları',
        href: '/settings/appearance',
    },
];

export default function Appearance() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Görünüm Ayarları" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Görünüm Ayarları" description="Hesabınızın görünümünü güncelleyin" />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}

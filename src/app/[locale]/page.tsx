import {getTranslations} from 'next-intl/server';
import Mahdi from '../mahdi/page'

export default async function HomePage() {
    // const t = await getTranslations('HomePage');
    return <>
        {/*<h1>{t('title')}</h1>;*/}
        <Mahdi/>
    </>
}
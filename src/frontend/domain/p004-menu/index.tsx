// import './index.css';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { helperI18Next } from 'universal-helper';

import Template from '../../global/component/templates/template-mobile';
import { getMethodStoreGlobal } from '../../global/store';
import { getMethodStoreGlobalPersist } from '../../global/store/persist';
import initI18N from './i18n';
// import
const i18nDomainName = 'menu';
const I18N: helperI18Next.TypeI18NDomain = initI18N({ name: i18nDomainName });

const JSX = () => {
  const { setMenu } = getMethodStoreGlobal();
  const { setUserData } = getMethodStoreGlobalPersist();

  const { t } = useTranslation([i18nDomainName]);

  useEffect(() => {
    setMenu(t('header'), 4);
  }, []);
  return (
    <Template.JSX>
      <div className="flex-auto flex flex-col bg-light-700">
        <div className="flex-auto flex flex-col"></div>
        <div className="flex-none h-15 mb-10 px-10">
          <button
            className="text-2xl font-medium
            w-full text-white rounded 
             py-3 block  bg-secondary-select shadow-xl hover:bg-secondary-hover
            disabled:text-gray-300
            disabled:bg-gray-500"
            onClick={() => {
              setUserData(null);
            }}
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </Template.JSX>
  );
};

export default { I18N, JSX };

import { ColumnConfig, TableConfig } from '../types';
import { FakeDataType } from './types';

export const fakeTableData: Array<FakeDataType> = [
  {
    id: '1',
    name: 'Lane Olson',
    email: 'Nulla.eget@adipiscing.ca',
    company: 'Augue Sed Inc.',
  },
  {
    id: '2',
    name: 'Ryan Munoz',
    email: 'ipsum@Sedauctor.edu',
    company: 'Scelerisque Foundation',
  },
  {
    id: '3',
    name: 'Asher Estrada',
    email: 'mauris@euaugueporttitor.net',
    company: 'Duis Gravida Associates',
  },
  {
    id: '4',
    name: 'Oleg Puckett',
    email: 'pede.Cras.vulputate@lobortis.net',
    company: 'Augue Consulting',
  },
  {
    id: '5',
    name: 'Craig Small',
    email: 'purus@semconsequat.ca',
    company: 'Malesuada Malesuada Institute',
  },
  {
    id: '6',
    name: 'Raphael Daniels',
    email: 'porta@Phasellus.co.uk',
    company: 'Faucibus Corp.',
  },
  {
    id: '7',
    name: 'Quinlan Crane',
    email: 'consequat@Etiamgravida.net',
    company: 'Sed Sem Egestas Corporation',
  },
  {
    id: '8',
    name: 'Hop Vance',
    email: 'ante@cubiliaCurae.org',
    company: 'Sit Amet Faucibus Corporation',
  },
  {
    id: '9',
    name: 'Hedley Holland',
    email: 'fames.ac.turpis@sedturpisnec.edu',
    company: 'Egestas Consulting',
  },
  {
    id: '10',
    name: 'Dexter Swanson',
    email: 'leo@purussapien.net',
    company: 'Eu PC',
  },
  {
    id: '11',
    name: 'Camden Weiss',
    email: 'neque.et@Vestibulumante.net',
    company: 'Aliquam Eros Institute',
  },
  {
    id: '12',
    name: 'Quentin Watson',
    email: 'Nulla.tincidunt.neque@dapibusid.co.uk',
    company: 'Nulla Consulting',
  },
  {
    id: '13',
    name: 'Craig Lester',
    email: 'Sed.dictum.Proin@Suspendisseeleifend.co.uk',
    company: 'Ante Ipsum Primis Corp.',
  },
  {
    id: '14',
    name: 'Vincent Waters',
    email: 'ipsum.cursus.vestibulum@sempercursus.ca',
    company: 'Eu Company',
  },
  {
    id: '15',
    name: 'Xavier Blanchard',
    email: 'eget.metus.In@convallisincursus.co.uk',
    company: 'Aliquam Iaculis Associates',
  },
];

export const fakeTableConfig: TableConfig<FakeDataType> = {
  columns: [
    {
      label: 'id',
      value: 'id',
    },
    {
      label: 'name',
      value: 'name',
    },
    {
      label: 'email',
      value: 'email',
    },
    {
      label: 'company',
      value: 'company',
    },
  ],
};

export const fakeSortableTableConfig: TableConfig<FakeDataType> = {
  columns: [
    {
      label: 'id',
      value: 'id',
      sortable: true,
      defaultSort: 'desc',
    },
    {
      label: 'name',
      value: 'name',
    },
    {
      label: 'email',
      value: 'email',
    },
    {
      label: 'company',
      value: 'company',
    },
  ],
};

export const fakeColumnConfig: ColumnConfig<FakeDataType> = {
  label: 'id',
  value: 'id',
};

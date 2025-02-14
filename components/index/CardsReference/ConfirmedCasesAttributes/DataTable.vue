<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template #button>
      <span />
    </template>
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      fixed-header
      :mobile-breakpoint="0"
      :custom-sort="customSort"
      :footer-props="{
        'items-per-page-options': [15, 30, 50, 100, 200, 300, -1],
        'items-per-page-text': $t('DataView_Footer[0]'),
      }"
      class="cardTable"
    >
      <template #body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.text">
            <th class="text-start" scope="row">
              <template v-if="item['通番URL']">
                <app-link :to="item['通番URL']" :show-icon="false">
                  {{ item['id'] }}
                </app-link>
              </template>
              <template v-else>
                {{ item['id'] }}
              </template>
            </th>
            <td class="text-start">
              <time :datetime="formatDateTime(item['確定日'])">{{
                positiveConfirmedDate(item['確定日'])
              }}</time>
            </td>
            <td class="text-start">{{ item['発症日'] }}</td>
            <td class="text-start">
              {{ item['居住地'] }}
              <span v-if="item['滞在地']"> ({{ item['滞在地'] }}) </span>
            </td>
            <td class="text-start">{{ item['年代'] }}</td>
            <td class="text-center">{{ item['接触歴'] }}</td>
            <td class="text-center">
              <template v-if="item.yt">
                <app-link :to="item.yt" :show-icon="false">📺</app-link>
              </template>
            </td>
          </tr>
        </tbody>
      </template>
      <template slot="footer.page-text" slot-scope="props">
        {{
          $t('DataView_Footer[1]', {
            itemsLength: props.itemsLength,
            pageStart: props.pageStart,
            pageStop: props.pageStop,
          })
        }}
      </template>
    </v-data-table>
    <template #notes>
      <notes-expansion-panel
        class="DataView-ExpansionPanel"
        :expansion-panel-text="$t('Common.注')"
      >
        <template #notes>
          <slot name="notes" />
        </template>
      </notes-expansion-panel>
    </template>
    <template #dataSetPanel>
      <data-view-data-set-panel
        :title="title"
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
        :card-path="`/cards/${titleId}`"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import NotesExpansionPanel from '@/components/index/_shared/DataView/NotesExpansionPanel.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import { getDayjsObject } from '@/utils/formatDate'

export default Vue.extend({
  components: { DataView, DataViewDataSetPanel, AppLink, NotesExpansionPanel },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    chartData: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: '',
    },
    info: {
      type: Object,
      default: () => {},
    },
    customSort: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')
    // NodeListをIE11でforEachするためのワークアラウンド
    const nodes = Array.prototype.slice.call(tables, 0)
    nodes.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })

    const inputs = vTableElement.querySelectorAll('input[aria-readonly]')
    Array.prototype.slice.call(inputs, 0).forEach((input: Element) => {
      input.removeAttribute('aria-readonly')
    })
  },
  methods: {
    positiveConfirmedDate(day: string) {
      return this.$d(getDayjsObject(day).toDate(), 'dateWithoutYear')
    },
    formatDateTime(dateString: string): string {
      const date = getDayjsObject(dateString)
      return date.format('YYYY-MM-DD')
    },
  },
})
</script>

<style lang="scss">
.cardTable {
  &.v-data-table {
    table {
      border-collapse: collapse;
    }
    th {
      padding: 6px 5px !important;
      height: auto !important;
      color: $gray-2 !important;
      @include font-size(12, true);

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;
        th {
          padding: 6px 5px !important;
          border-right: 1px dotted #dfdfdf;
          font-weight: normal;
          @include font-size(12, true);
          @include lessThan($small) {
            padding: 5px 2px !important;
          }
        }
        td {
          padding: 6px 5px !important;
          height: auto !important;
          border-right: 1px dotted #dfdfdf;
          @include font-size(12, true);
          @include lessThan($small) {
            padding: 5px 4px !important;
          }
          &.text-center {
            text-align: center;
          }
        }
        &:nth-child(odd) {
          th,
          td {
            background: rgba($gray-4, 0.3);
          }
        }
      }
    }
    .v-select {
      margin-left: 10px;
    }
    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
  .v-data-table__wrapper {
    box-shadow: 0 -20px 12px -12px #0003 inset;
  }
  .v-data-footer {
    padding: 0 !important;
    margin-right: 0 !important;
    justify-content: flex-end;
    @include font-size(11);
    &__select {
      margin: 0 !important;
      > .v-input.v-select {
        margin-left: 1rem !important;
        @include lessThan($small) {
          margin-left: 6px !important;
        }
      }
    }
    &__pagination {
      margin: 0 !important;
    }
    &__icons-before {
      flex-basis: 26px;
      > button.v-btn.v-btn--icon {
        width: 26px !important;
        height: 30px !important;
        margin: 0 0 0 6px !important;
      }
    }
    &__icons-after {
      flex-basis: 26px;
      > button.v-btn.v-btn--icon {
        width: 26px !important;
        height: 30px !important;
        margin: 0 !important;
      }
    }
  }
  .v-data-footer__select .v-select__selections .v-select__selection--comma {
    @include font-size(11);
  }
}
.v-menu__content {
  width: 60px;
  .v-list-item {
    padding: 0 8px;
  }
}
.v-list-item__title {
  font-size: 1.5rem;
}
</style>

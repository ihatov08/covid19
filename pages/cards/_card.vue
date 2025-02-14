<template>
  <div class="DataBlock">
    <component :is="cardComponent" md="12">
      <template #breadCrumb>
        <breadcrumb :items="breadCrumb.items" />
      </template>
    </component>
  </div>
</template>

<script>
import Breadcrumb from '@/components/_shared/Breadcrumb.vue'
import RestaurantMapCard from '@/components/index/CardsIwateNinshou/Restaurant/Card'
import AgeGroupCard from '@/components/index/CardsMonitoring/AgeGroup/Card.vue'
import ConfirmedCasesDetailsCard from '@/components/index/CardsMonitoring/ConfirmedCasesDetails/Card.vue'
import ConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/ConfirmedCasesNumber/Card.vue'
import EffectiveReproductionNumberCard from '@/components/index/CardsMonitoring/EffectiveReproductionNumber/Card.vue'
import HospitalCapacityCard from '@/components/index/CardsMonitoring/HospitalCapacity/Card.vue'
import HospitalizedNumberCard from '@/components/index/CardsMonitoring/HospitalizedNumber/Card.vue'
import HotelCapacityCard from '@/components/index/CardsMonitoring/HotelCapacity/Card.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
import MonitoringConfirmedCasesNumberPer100kCard from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumberPer100k/Card.vue'
import PositiveRateCard from '@/components/index/CardsMonitoring/PositiveRate/Card.vue'
import StageCard from '@/components/index/CardsMonitoring/Stage/Card.vue'
import TestedNumberCard from '@/components/index/CardsMonitoring/TestedNumber/Card.vue'
import UntrackedRateCard from '@/components/index/CardsMonitoring/UntrackedRate/Card.vue'
import WeeklyMapCard from '@/components/index/CardsMonitoring/WeeklyMap/Card.vue'
import ConfirmedCasesAttributesCard from '@/components/index/CardsReference/ConfirmedCasesAttributes/Card.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
import SelfDisclosuresCard from '@/components/index/CardsReference/SelfDisclosures/Card.vue'
import WhatsNewCard from '@/components/index/CardsReference/WhatsNew/Card.vue'
import Data from '@/data/data.json'
import PositiveRate from '@/data/positive_rate.json'
import PositiveStatus from '@/data/positive_status.json'
import { getDayjsObject } from '@/utils/formatDate.ts'

export default {
  components: {
    RestaurantMapCard,
    WeeklyMapCard,
    Breadcrumb,
    WhatsNewCard,
    SelfDisclosuresCard,
    MonitoringConfirmedCasesNumberCard,
    MonitoringConfirmedCasesNumberPer100kCard,
    EffectiveReproductionNumberCard,
    PositiveRateCard,
    UntrackedRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedNumberCard,
    HospitalizedNumberCard,
    HospitalCapacityCard,
    HotelCapacityCard,
    StageCard,
    AgeGroupCard,
  },
  data() {
    let title, updatedAt, cardComponent, cardTitle
    switch (this.$route.params.card) {
      case 'weekly-map':
        cardComponent = 'weekly-map-card'
        cardTitle = this.$t('WeeklyMapCard.title')
        break
      case 'whats-new':
        cardComponent = 'whats-new-card'
        cardTitle = this.$t('WhatsNewCard.title')
        break
      case 'self-disclosures':
        cardComponent = 'self-disclosures-card'
        cardTitle = this.$t('SelfDisclosuresCard.title')
        break
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        cardTitle = this.$t('ConfirmedCasesDetailsCard.title')
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        cardTitle = this.$t('ConfirmedCasesNumberCard.title')
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        cardTitle = this.$t('ConfirmedCasesByMunicipalitiesCard.title')
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        cardTitle = this.$t('ConfirmedCasesAttributesCard.title')
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        cardTitle = this.$t('TestedNumberCard.title')
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        cardTitle = this.$t('PositiveRateCard.a[0]')
        break
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        cardTitle = this.$t('MonitoringConfirmedCasesNumberCard.titles[0]')
        break
      case 'monitoring-number-of-confirmed-cases-per-100k':
        cardComponent = 'monitoring-confirmed-cases-number-per-100k-card'
        cardTitle = this.$t('MonitoringConfirmedCasesNumberPer100kCard.title')
        break
      case 'effective-reproduction-number':
        cardComponent = 'effective-reproduction-number-card'
        cardTitle = this.$t('EffectiveReproductionNumberCard.title')
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        cardTitle = this.$t('UntrackedRateCard.titles[0]')
        break
      case 'number-of-hospitalized':
        cardComponent = 'hospitalized-number-card'
        cardTitle = this.$t('HospitalizedNumberCard.title')
        break
      case 'hospital-capacity':
        cardComponent = 'hospital-capacity-card'
        cardTitle = this.$t('HospitalCapacityCard.title')
        break
      case 'hotel-capacity':
        cardComponent = 'hotel-capacity-card'
        cardTitle = this.$t('HotelCapacityCard.title')
        break
      case 'stage':
        cardComponent = 'stage-card'
        cardTitle = this.$t('StageCard.title')
        break
      case 'restaurant-map':
        cardComponent = 'restaurant-map-card'
        cardTitle = this.$t('RestaurantCard.title')
        break
      case 'age-group':
        cardComponent = 'age-group-card'
        cardTitle = this.$t('AgeGroupCard.title')
        break
    }

    const breadCrumb = {
      items: [
        {
          text: this.$t('Common.ホーム'),
          disabled: false,
          to: this.localePath('/'),
        },
        {
          text: cardTitle,
          disabled: false,
          to: this.$route.path,
        },
      ],
    }

    return {
      cardComponent,
      title,
      updatedAt,
      breadCrumb,
    }
  },
  head() {
    const url = 'https://iwate.stopcovid19.jp'

    const timestamp = new Date().getTime()

    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`

    const date = Data.patients_summary.data.slice(-1)[0].日付

    const description = `${this.$t('{date}', {
      date: this.$d(getDayjsObject(date).toDate(), 'date'),
    })}${this.$t('は陽性が')}${
      PositiveRate.data.slice(-1)[0].positive_count
    }${this.$t('件・検査が')}${
      (PositiveRate.data.slice(-1)[0].pcr_positive_count ?? 0) +
      (PositiveRate.data.slice(-1)[0].pcr_negative_count ?? 0) +
      (PositiveRate.data.slice(-1)[0].antigen_positive_count ?? 0) +
      (PositiveRate.data.slice(-1)[0].antigen_negative_count ?? 0)
    }${this.$t('件・療養中は')}${
      PositiveStatus.data.slice(-1)[0].hospital +
      PositiveStatus.data.slice(-1)[0].hotel +
      PositiveStatus.data.slice(-1)[0].waiting
    }${this.$t(
      '人です。陽性者の属性、検査の陽性率、病床数、市町村別陽性者数、相談件数などの各種データや過去の推移グラフはこちら。'
    )}`

    const defaultTitle = `${this.$t('Common.岩手県')} ${this.$t(
      'Common.新型コロナウイルス感染症'
    )}${this.$t('Common.対策サイト')}`

    return {
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          template: () => defaultTitle,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: () => `${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: () => `${description}`,
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.DataBlock {
  .DataCard {
    padding: 0;
    @include lessThan(960) {
      padding: 0;
      &:nth-child(2n) {
        padding: 0 12px 12px 12px;
      }
    }
  }
}
</style>

# frozen_string_literal: true

require 'spec_helper'

def has_untracked_rate_card
  # h3
  expect(find('#UntrackedRateCard > div > div > div.DataView-Header > div > div > h3').text).to eq '接触歴等不明者数(7日間移動平均)'
  d = find('#UntrackedRateCard > div > div > div.DataView-Header > div > div > h3 > a')[:href]
  expect(URI.parse(d).path).to eq '/cards/untracked-rate/'

  # 日付
  d = Date.parse(DAILY_POSITIVE_DETAIL_JSON['data'].last['diagnosed_date']).strftime('%-m月%-d日')
  expect(find('#UntrackedRateCard > div > div > div.DataView-Header > div > div > div > small').text).to match "^#{d} の数値"

  # 接触歴等不明者数(7日間移動平均)
  d = number_to_delimited(page.evaluate_script("#{DAILY_POSITIVE_DETAIL_JSON['data'].last['weekly_average_untracked_count']}.toFixed(1)"))
  expect(find('#UntrackedRateCard > div > div > div.DataView-Header > div > div > div > span > strong').text).to eq d.to_s

  # 接触歴等不明者数(7日間移動平均)(実際に計算してみる)
  d = number_to_delimited((DAILY_POSITIVE_DETAIL_JSON['data'][-7..].reduce(0) { |sum, n| sum + n['missing_count'].to_i } / 7.0).round(1))
  expect(find('#UntrackedRateCard > div > div > div.DataView-Header > div > div > div > span > strong').text).to eq d.to_s

  # データを表示ボタンの文言
  expect(find('#UntrackedRateCard .DataViewExpansionPanel button.v-expansion-panel-header').text).to eq 'データを表示'

  # データを表示ボタンをクリックすると開く
  expect(page).not_to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')
  find('#UntrackedRateCard .DataViewExpansionPanel button.v-expansion-panel-header').click
  expect(page).to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')

  # テーブルの上から3番目の値(日別)
  d = Date.parse(DAILY_POSITIVE_DETAIL_JSON['data'][-3]['diagnosed_date']).strftime('%-m月%-d日')
  expect(find('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel-content table > tbody > tr:nth-child(3) > th').text).to eq d.to_s

  # テーブルの上から3番目の値を確認(接触歴等判明者数)
  d = number_to_delimited(DAILY_POSITIVE_DETAIL_JSON['data'][-3]['reported_count'].to_i)
  expect(find('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel-content table > tbody > tr:nth-child(3) > td:nth-child(2)').text).to eq d.to_s

  # テーブルの上から3番目の値を確認(接触歴等不明者数)
  d = number_to_delimited(DAILY_POSITIVE_DETAIL_JSON['data'][-3]['missing_count'].to_i)
  expect(find('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel-content table > tbody > tr:nth-child(3) > td:nth-child(3)').text).to eq d.to_s

  # テーブルの上から3番目の値を確認(接触歴等不明者数7日間移動平均)(実際に計算してみる)
  d = number_to_delimited((DAILY_POSITIVE_DETAIL_JSON['data'][-9..-3].reduce(0) { |sum, n| sum + n['missing_count'].to_i } / 7.0).round(1))
  expect(find('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel-content table > tbody > tr:nth-child(3) > td:nth-child(4)').text).to eq d.to_s

  # データを表示ボタンをクリックすると閉じる
  expect(page).to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')
  find('#UntrackedRateCard .DataViewExpansionPanel button.v-expansion-panel-header').click
  expect(page).not_to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')

  # 注釈を表示ボタンの文言
  expect(find('#UntrackedRateCard .NotesExpansionPanel button.v-expansion-panel-header').text).to eq '注釈'

  # 注釈を表示ボタンをクリックすると開く
  expect(page).not_to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content')
  sleep 0.5
  find('#UntrackedRateCard .NotesExpansionPanel button.v-expansion-panel-header').click
  expect(page).to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content')

  # 注釈の中身をチェック
  JA_JSON['UntrackedRateCard']['notes'].each_with_index do |item, index|
    expect(find("#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content ul > li:nth-child(#{index + 1})").text).to eq item
  end
  expect(find('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content ul > li:nth-child(4)').text).to eq JA_JSON['Common']['7MA']

  # 注釈を表示ボタンをクリックすると閉じる
  expect(page).to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content')
  find('#UntrackedRateCard .NotesExpansionPanel button.v-expansion-panel-header').click
  expect(page).not_to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel-content')

  # データを表示と注釈を表示の両方を開く
  expect(page).not_to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')
  expect(page).not_to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel--active')
  find('#UntrackedRateCard .DataViewExpansionPanel button.v-expansion-panel-header').click
  sleep 1
  find('#UntrackedRateCard .NotesExpansionPanel button.v-expansion-panel-header').click
  expect(page).to have_selector('#UntrackedRateCard .DataViewExpansionPanel .v-expansion-panel--active')
  expect(page).to have_selector('#UntrackedRateCard .NotesExpansionPanel .v-expansion-panel--active')
end

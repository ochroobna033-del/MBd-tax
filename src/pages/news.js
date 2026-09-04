import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function News() {
  const [selectedMonth, setSelectedMonth] = useState(7) // 7 = August (0-indexed)
  const [selectedReport, setSelectedReport] = useState(null)

  // =========================================================
  // TAX CALENDAR
  // =========================================================

  const months = [
    '1 сар',
    '2 сар',
    '3 сар',
    '4 сар',
    '5 сар',
    '6 сар',
    '7 сар',
    '8 сар',
    '9 сар',
    '10 сар',
    '11 сар',
    '12 сар',
  ]

  const calendarData = {
    0: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын борлуулалт, худалдан авалт болон НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    1: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256/',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'ААНОАТ',
        title: 'ААНОАТ-ын жилийн эцсийн тайлан',
        status: 'Чухал',
        description:
          'Аж ахуйн нэгжийн орлогын албан татварын жилийн эцсийн тайланг гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'ТТ-11',
        title: 'ТТ-11 тайлан',
        status: 'Чухал',
        description:
          'ТТ-11 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'ТТ-12',
        title: 'ТТ-12 тайлан',
        status: 'Чухал',
        description:
          'ТТ-12 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'ТТ-13',
        title: 'ТТ-13 тайлан',
        status: 'Чухал',
        description:
          'ТТ-13 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НХАТ',
        title: 'НХАТ тайлан',
        status: 'Чухал',
        description:
          'НХАТ-ын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'ҮХЭХАТ',
        title: 'ҮХЭХАТ тайлан',
        status: 'Чухал',
        description:
          'ҮХЭХАТ-ын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'БУСАД',
        title: 'Бусад тайлан',
        status: 'Чухал',
        description:
          'Хамаарах бусад жилийн эцсийн тайланг шалгаж, тогтоосон хугацаанд илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '15',
        type: 'ХХОАТ',
        title: 'ХХОАТ – хувь хүн',
        status: 'Чухал',
        description:
          'Хувь хүний орлогын албан татвартай холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    2: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    3: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-11',
        title: 'ТТ-11 тайлан',
        status: 'Чухал',
        description:
          'ТТ-11 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-12',
        title: 'ТТ-12 тайлан',
        status: 'Чухал',
        description:
          'ТТ-12 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-13',
        title: 'ТТ-13 тайлан',
        status: 'Чухал',
        description:
          'ТТ-13 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'НХАТ',
        title: 'НХАТ тайлан',
        status: 'Чухал',
        description:
          'НХАТ-ын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    4: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    5: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    6: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ААНОАТ',
        title: 'ААНОАТ – улирлын тайлан',
        status: 'Чухал',
        description:
          'Аж ахуйн нэгжийн орлогын албан татварын улирлын тайланг гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-11',
        title: 'ТТ-11 тайлан',
        status: 'Чухал',
        description:
          'ТТ-11 улирлын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-12',
        title: 'ТТ-12 тайлан',
        status: 'Чухал',
        description:
          'ТТ-12 улирлын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-13',
        title: 'ТТ-13 тайлан',
        status: 'Чухал',
        description:
          'ТТ-13 улирлын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'НХАТ',
        title: 'НХАТ тайлан',
        status: 'Чухал',
        description:
          'НХАТ-ын улирлын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    7: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    8: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    9: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-11',
        title: 'ТТ-11 тайлан',
        status: 'Чухал',
        description:
          'ТТ-11 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-12',
        title: 'ТТ-12 тайлан',
        status: 'Чухал',
        description:
          'ТТ-12 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-13',
        title: 'ТТ-13 тайлан',
        status: 'Чухал',
        description:
          'ТТ-13 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'НХАТ',
        title: 'НХАТ тайлан',
        status: 'Чухал',
        description:
          'НХАТ-ын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    10: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-11',
        title: 'ТТ-11 тайлан',
        status: 'Чухал',
        description:
          'ТТ-11 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-12',
        title: 'ТТ-12 тайлан',
        status: 'Чухал',
        description:
          'ТТ-12 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'НХАТ',
        title: 'НХАТ тайлан',
        status: 'Чухал',
        description:
          'НХАТ-ын тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '20',
        type: 'ТТ-13',
        title: 'ТТ-13 тайлан',
        status: 'Чухал',
        description:
          'ТТ-13 тайланг тогтоосон хугацаанд гаргаж илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],

    11: [
      {
        day: '5',
        type: 'НДШ',
        title: 'Нийгмийн даатгалын тайлан',
        status: 'Санамж',
        description:
          'Ажилтнуудын нийгмийн даатгалын шимтгэлтэй холбоотой тайлан, тооцоог шалгаж илгээнэ.',
        link: 'https://portal.ndaatgal.mn/',
      },
      {
        day: '8',
        type: 'НӨАТ',
        title: 'НӨАТ шивэлт',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын баримт, борлуулалт болон худалдан авалтын мэдээллийг шалгаж шивнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
      {
        day: '10',
        type: 'НӨАТ',
        title: 'НӨАТ-ын тайлан',
        status: 'Санамж',
        description:
          'Өмнөх сарын НӨАТ-ын тайланг гаргаж цахимаар илгээнэ.',
        link: 'https://auth.itc.gov.mn/auth/realms/ITC/protocol/openid-connect/auth?client_id=etax-gui&redirect_uri=https%3A%2F%2Fetax.mta.mn%2Fapp&state=9a15b63b-3652-4ba3-9f2d-1cdaee1c29be&response_mode=fragment&response_type=code&scope=openid&nonce=522221d8-348d-4f70-b8d2-0f184241f0dd&code_challenge=LgGkaXWbi7H-OAgeIiyyDEjTU6PFaAjdYKAuQl1Vm4M&code_challenge_method=S256',
      },
    ],
  }

  const currentCalendar = calendarData[selectedMonth] || []

  return (
    <>
      <Head>
        <title>Мэдээ мэдээлэл | MBD TAX TACTIC TMZ</title>
        <meta
          name="description"
          content="MBD TAX TACTIC TMZ - Татвар, санхүү, нягтлан бодох бүртгэлийн мэдээлэл."
        />
      </Head>

      <main className="min-h-screen bg-gray-950 text-gray-200">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-gray-950/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

            {/* LOGO */}
            <Link href="/" className="group">
              <div className="text-lg font-black tracking-tight text-white transition group-hover:text-green-400 sm:text-xl">
                MBD <span className="text-green-400">TAX TACTIC TMZ</span>
              </div>

              <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                Tax Advisory
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-2 md:flex">
              <Link
                href="/"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-gray-900 hover:text-white"
              >
                Нүүр
              </Link>

              <Link
                href="/training"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-gray-900 hover:text-white"
              >
                Сургалт
              </Link>

              <Link
                href="/news"
                className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20"
              >
                Мэдээ
              </Link>

              <Link
                href="/contact"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-gray-900 hover:text-white"
              >
                Холбоо барих
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <Link
              href="/training"
              className="rounded-xl border border-gray-800 bg-gray-900 px-4 py-2 text-xs font-bold text-gray-300 transition hover:border-green-500 hover:text-white md:hidden"
            >
              Сургалт →
            </Link>
          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-green-600/10 blur-[120px]" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-emerald-600/5 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              MBD TAX TACTIC TMZ
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Татварын{' '}
              <span className="text-green-400">мэдээлэл</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Татварын үндсэн ойлголт, тайлан, эрсдэл болон
              бизнес эрхлэгчдэд хэрэгтэй мэдээллийг нэг дороос.
            </p>
          </div>
        </section>

        {/* =====================================================
            TAX CALENDAR
        ===================================================== */}

        <section className="border-y border-gray-900 bg-gray-950/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

            {/* HEADER */}
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                PLAN YOUR TAX
              </div>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                📅 Татварын календарь
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Тайлан болон төлөлтийн хугацаагаа урьдчилан
                төлөвлөж, татварын эрсдэлээс сэргийлээрэй.
              </p>
            </div>

            {/* MONTHS */}
            <div className="mb-6 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-2">
                {months.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    onClick={() => setSelectedMonth(index)}
                    className={`
                      rounded-xl
                      border
                      px-5
                      py-3
                      text-sm
                      font-bold
                      transition-all
                      duration-300
                      ${
                        selectedMonth === index
                          ? 'border-green-500 bg-green-600 text-white shadow-lg shadow-green-600/20'
                          : 'border-gray-800 bg-gray-900 text-gray-500 hover:-translate-y-0.5 hover:border-green-500/40 hover:bg-gray-800 hover:text-white'
                      }
                    `}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            {/* CALENDAR */}
            <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-xl">

              <div className="flex flex-col justify-between gap-5 border-b border-gray-800 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-green-400">
                    TAX CALENDAR
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Энэ оны {months[selectedMonth]}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Татварын санамж болон төлөвлөлт
                  </p>
                </div>

                <div className="w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400">
                  {currentCalendar.length} санамж
                </div>
              </div>

              {/* CALENDAR ITEMS */}
              <div className="divide-y divide-gray-800">
                {currentCalendar.length > 0 ? (
                  currentCalendar.map((item, index) => (
                    <div
                      key={index}
                      className="group p-5 transition-all duration-300 hover:bg-gray-800/40 sm:p-8"
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                        {/* DATE */}
                        <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-800 transition group-hover:border-green-500/30 group-hover:bg-green-500/10">
                          <span className="text-3xl font-black text-white">
                            {item.day}
                          </span>

                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            өдөр
                          </span>
                        </div>

                        {/* INFO */}
                        <div className="flex-1">
                          <div className="mb-3 flex flex-wrap gap-2">

                            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                              {item.type}
                            </span>

                            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                              {item.status}
                            </span>

                          </div>

                          <h4 className="text-lg font-bold text-white transition group-hover:text-green-400">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            {item.description}
                          </p>
                        </div>

                        {/* DETAIL BUTTON */}
                        <button
                          type="button"
                          onClick={() => setSelectedReport(item)}
                          className="shrink-0 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
                        >
                          Дэлгэрэнгүй →
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-16 text-center">
                    <div className="mb-4 text-5xl">📅</div>

                    <h3 className="text-xl font-bold text-white">
                      Мэдээлэл байхгүй байна
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Энэ сард календарийн мэдээлэл оруулаагүй байна.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* WARNING */}
            <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-xl">
                  💡
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Анхаарах зүйл
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Татварын тайлан, төлөлтийн хугацаа нь
                    татварын төрөл болон татвар төлөгчийн
                    нөхцөлөөс хамаарч өөр байж болно.
                    Албан ёсны мэдээллийг тухай бүр шалгаж
                    хэвшээрэй.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-10">

            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-green-600/10 blur-[80px]" />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                MBD TAX TACTIC TMZ
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Татварын асуудлаа
                <span className="text-green-400">
                  {' '}эрт шийдээрэй
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Татварын эрсдэлийг асуудал болохоос нь өмнө
                тодорхойлж, зөв төлөвлөлт хийх нь бизнесийн
                санхүүгийн тогтвортой байдлыг хамгаална.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/training"
                  className="rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
                >
                  Сургалт үзэх →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-gray-800 bg-gray-950 px-6 py-3.5 text-sm font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:text-white"
                >
                  Холбоо барих
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="border-t border-gray-800 bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

            <div className="grid gap-10 md:grid-cols-3">

              {/* BRAND */}
              <div>
                <Link
                  href="/"
                  className="text-xl font-black text-white"
                >
                  MBD <span className="text-green-400">
                    TAX TACTIC TMZ
                  </span>
                </Link>

                <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                  Татвар, нягтлан бодох бүртгэл болон
                  санхүүгийн зөвлөгөө, мэдээллийг
                  мэргэжлийн түвшинд хүргэнэ.
                </p>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-bold text-white">
                  Хурдан холбоос
                </h3>

                <div className="mt-4 flex flex-col gap-3 text-sm">

                  <Link
                    href="/"
                    className="text-gray-600 transition hover:text-green-400"
                  >
                    Нүүр
                  </Link>

                  <Link
                    href="/training"
                    className="text-gray-600 transition hover:text-green-400"
                  >
                    Сургалт
                  </Link>

                  <Link
                    href="/news"
                    className="text-green-400"
                  >
                    Мэдээ
                  </Link>

                  <Link
                    href="/contact"
                    className="text-gray-600 transition hover:text-green-400"
                  >
                    Холбоо барих
                  </Link>

                </div>
              </div>

              {/* INFO */}
              <div>
                <h3 className="font-bold text-white">
                  Мэдээ мэдээлэл
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Татварын шинэ мэдээлэл, зөвлөгөө,
                  тайлан болон бизнесийн санхүүтэй
                  холбоотой хэрэгтэй контентуудыг
                  тогтмол хүргэнэ.
                </p>
              </div>

            </div>

            <div className="mt-10 border-t border-gray-900 pt-6 text-center">
              <p className="text-xs text-gray-700">
                © {new Date().getFullYear()} MBD TAX TACTIC TMZ.
                Бүх эрх хуулиар хамгаалагдсан.
              </p>
            </div>

          </div>
        </footer>

      </main>

      {/* =====================================================
          DETAIL MODAL
      ===================================================== */}

      {selectedReport && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedReport(null)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="border-b border-gray-100 px-6 py-5">
              <div className="flex items-start justify-between gap-4">

                <div>
                  <div className="mb-3 flex items-center gap-2">

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                      {selectedReport.type}
                    </span>

                    <span className="text-sm text-gray-500">
                      {selectedReport.day}-нд
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    {selectedReport.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReport(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 transition hover:bg-gray-200"
                  aria-label="Хаах"
                >
                  ×
                </button>

              </div>
            </div>

            {/* MODAL BODY */}
            <div className="p-6">

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-bold text-gray-900">
                  Тайлангийн тухай
                </h4>

                <p className="leading-7 text-gray-600">
                  {selectedReport.description}
                </p>
              </div>

              <div className="mb-6 rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                    📅
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Тайлангийн хугацаа
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      Сар бүрийн {selectedReport.day}-нд
                    </p>
                  </div>

                </div>
              </div>

              <Link
                href={selectedReport.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-4 font-semibold text-white transition-all hover:bg-gray-700"
              >
                Тайлангийн систем рүү орох →
              </Link>

              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="mt-3 w-full rounded-xl border border-gray-200 px-5 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Хаах
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
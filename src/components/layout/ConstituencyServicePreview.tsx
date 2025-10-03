'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Briefcase, GraduationCap, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

const previewStats = [
  {
    icon: Users,
    number: '68',
    label: 'Appointed Aides',
    description: 'Complete team structure serving the constituency',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Briefcase,
    number: '37',
    label: 'Employment Created',
    description: 'Youths employed in government agencies',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: GraduationCap,
    number: '10',
    label: 'Empowerment Programs',
    description: 'Skills development initiatives',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Award,
    number: '500+',
    label: 'Total Beneficiaries',
    description: 'Direct program beneficiaries',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

const featuredAides = [
  {
    name: 'Chief Bolakale Daodu',
    post: 'Chief of Staff',
    town: 'Akungba',
    phone: '08169462684'
  },
  {
    name: 'Dr. Theophilus Sakara',
    post: 'Special Adviser (Political Matters)',
    town: 'Ibaka Oka',
    phone: '08062229677'
  },
  {
    name: 'Engr. Kayode Ogedengbe',
    post: 'SLA Infrastructure & Constituency Outreach',
    town: 'Agba Oka',
    phone: '08062140378'
  }
];

const employmentHighlights = [
  { agency: 'DSS', count: 4, color: 'bg-blue-100 text-blue-800' },
  { agency: 'NSCDC', count: 8, color: 'bg-green-100 text-green-800' },
  { agency: 'Nigerian Army', count: 3, color: 'bg-red-100 text-red-800' },
  { agency: 'Federal Fire Service', count: 3, color: 'bg-orange-100 text-orange-800' },
  { agency: 'Nigerian Navy', count: 4, color: 'bg-blue-100 text-blue-800' },
  { agency: 'Other Agencies', count: 15, color: 'bg-gray-100 text-gray-800' }
];

export function ConstituencyServicePreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving the People with Transparency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Hon. Ade Adeogun has transformed the constituency through 
            strategic appointments, job creation, and community development initiatives.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {previewStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${stat.bgColor} p-6 rounded-none mb-4`}>
                <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Aides */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="bg-white shadow-lg rounded-none h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Leadership Team
                </CardTitle>
                <p className="text-sm text-gray-600">Key decision makers serving the constituency</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {featuredAides.map((aide, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-none">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{aide.name}</h4>
                        <p className="text-sm text-gray-600">{aide.post}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {aide.town}
                        </div>
                      </div>
                      {/* <a 
                        href={`tel:${aide.phone}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a> */}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="/constituency-service/aides">
                    <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                      View All 68 Aides
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Employment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="bg-white shadow-lg rounded-none h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  Job Creation Impact
                </CardTitle>
                <p className="text-sm text-gray-600">Youths employed across various government agencies</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {employmentHighlights.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.agency}</span>
                      <Badge className={item.color}>
                        {item.count} employed
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="/constituency-service/employment">
                    <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                      View All Employment Data
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-black p-8 text-white text-center rounded-none"
        >
          <h3 className="text-2xl font-bold mb-4">
            Experience Transparent Leadership
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Dive deep into the comprehensive records of constituency service, 
            from infrastructure projects to legislative achievements. Every detail is documented.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/constituency-service">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">
                Explore Full Records
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/constituency-service/infrastructure">
              <Button variant="outline" className="border-white bg-black text-white hover:bg-white hover:text-black px-8 py-3">
                View Infrastructure Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

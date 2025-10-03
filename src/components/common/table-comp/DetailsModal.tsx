'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Mail, Calendar, User, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  title: string;
  fields: Array<{
    key: string;
    label: string;
    icon?: React.ComponentType<any>;
    render?: (value: any) => React.ReactNode;
    className?: string;
  }>;
}

export function DetailsModal({ isOpen, onClose, data, title, fields }: DetailsModalProps) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-none shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map((field) => (
                  <Card key={field.key} className="bg-gray-50 rounded-none">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        {field.icon && <field.icon className="w-4 h-4" />}
                        {field.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={field.className}>
                        {field.render 
                          ? field.render(data[field.key])
                          : data[field.key] || 'N/A'
                        }
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                {data.phoneNumber && (
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(`tel:${data.phoneNumber}`, '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

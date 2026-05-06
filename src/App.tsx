/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SOP_CONTENT } from './sopContent.ts';
import { FileText, Printer, ShieldAlert } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Document Shell Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-900 rounded text-white">
              <FileText size={20} />
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
                CollabMen.id | Corporate Archive
              </h1>
              <p className="text-xs text-gray-500 font-medium">INTERNAL DOCUMENT: CLASSIFIED</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors uppercase tracking-wider cursor-pointer active:scale-95"
              id="print-btn"
            >
              <Printer size={14} />
              Print Document
            </button>
          </div>
        </div>

        {/* Document Body */}
        <div className="bg-white p-8 sm:p-16 shadow-lg mt-8 mb-12 border border-gray-100 text-gray-800 leading-relaxed">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:border-b prose-h1:pb-4 prose-h1:mb-8 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-base prose-li:text-base prose-table:border prose-table:w-full prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-th:text-xs prose-th:uppercase prose-th:tracking-wider prose-td:p-3 prose-td:border-t prose-hr:border-gray-200 prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:italic">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{SOP_CONTENT}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-end">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">
              Digital Signature Verified: 0xCMID_7721
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              <ShieldAlert size={12} />
              Proprietary Information
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-xs py-8">
          &copy; 2026 CollabMen.id Management. All rights reserved. 
          <br />
          No part of this document may be reproduced without written permission.
        </footer>
      </div>
    </div>
  );
}

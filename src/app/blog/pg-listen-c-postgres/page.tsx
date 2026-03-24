'use client';

import NotebookLayout from '@/components/layout/NotebookLayout';
import { Terminal, Zap, Code } from 'lucide-react';

export default function PgListenPost() {
  const meta = {
    title: "pg_listen: Zero-Polling Database Triggers in C",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    tag: "Systems"
  };

  return (
    <NotebookLayout meta={meta}>
      <p>Polling is the computational equivalent of a child in a backseat screaming <em>"Are we there yet?"</em> every three seconds. I built <strong>pg_listen</strong> to give Postgres a direct voice at the OS level.</p>

      <h2 className="text-amber-400 font-serif italic">Pure C. Zero Overhead.</h2>
      <p>Using the native <strong>libpq</strong> interface, this library establishes a persistent socket to intercept <code>NOTIFY</code> events. It triggers asynchronous shell commands immediately upon database state changes.</p>

      <div className="my-8 p-6 bg-black border border-zinc-800 rounded-lg font-mono text-sm shadow-xl">
        <div className="text-zinc-500 mb-2">// Minimalist C implementation</div>
        <span className="text-blue-400">PGconn</span> *conn = <span className="text-emerald-400">PQconnectdb</span>(conninfo);<br/>
        <span className="text-blue-400">PGresult</span> *res = <span className="text-emerald-400">PQexec</span>(conn, <span className="text-rose-400">"LISTEN events"</span>);
      </div>

      <p>This is critical infrastructure for low-latency systems where every millisecond counts.</p>
    </NotebookLayout>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { 
  getPetsByStatusReportKYS,
  getPetsByRaceAndCategoryReportKYS,
  getPetsByGenderKYS
} from '../../services/petsServiceKYS';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import '../../assets/styles/ReportsStylesKYS.css';

import backIcon from '../../assets/images/imgs/btn-back.svg';

const ReportsPageKYS = () => {
  const navigate = useNavigate();
  const [statusReport, setStatusReport] = useState([]);
  const [raceCategoryReport, setRaceCategoryReport] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('status');
  const { logoutKYS } = useAuthKYS();
  
  const statusRef = useRef(null);
  const raceCategoryRef = useRef(null);
  const genderRef = useRef(null);
  const pdfContainerRef = useRef(null);

  const COLORS = ['#3949ab', '#4db6ac', '#ffb74d', '#ff7043', '#7986cb'];

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const [statusData, raceCatData, genderReport] = await Promise.all([
          getPetsByStatusReportKYS(),
          getPetsByRaceAndCategoryReportKYS(),
          getPetsByGenderKYS()
        ]);
        
        setStatusReport(Array.isArray(statusData) ? statusData : []);
        setRaceCategoryReport(Array.isArray(raceCatData) ? raceCatData : []);
        setGenderData(Array.isArray(genderReport) ? genderReport : []);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setStatusReport([]);
        setRaceCategoryReport([]);
        setGenderData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleBack = () => {
    navigate('/pets');
  };

  const downloadPDF = async () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    const margin = 40;
    let position = margin;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(57, 73, 171);
    doc.text('Informe de Mascotas', margin, position);
    position += 40;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generado el: ${new Date().toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}`, margin, position);
    position += 30;

    const addSectionToPDF = async (ref, title) => {
      if (!ref.current) return;
      
      const element = ref.current.cloneNode(true);
      element.classList.add('pdf-export');
      element.style.padding = '20px';
      element.style.backgroundColor = '#ffffff';
      element.style.width = '700px';
      
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.appendChild(element);
      document.body.appendChild(tempContainer);
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: true,
        backgroundColor: '#ffffff'
      });
      
      document.body.removeChild(tempContainer);
      
      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const imgWidth = doc.internal.pageSize.getWidth() - 2 * margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(57, 73, 171);
      doc.text(title, margin, position);
      position += 25;
      
      doc.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
      position += imgHeight + 30;
      
      if (position > doc.internal.pageSize.getHeight() - 50) {
        doc.addPage();
        position = margin;
      }
    };

    switch(activeTab) {
      case 'status':
        await addSectionToPDF(statusRef, 'Indicadores por Estado de Adopción');
        break;
      case 'race-category':
        await addSectionToPDF(raceCategoryRef, 'Distribución por Raza y Categoría');
        break;
      case 'gender':
        await addSectionToPDF(genderRef, 'Estadísticas por Género');
        break;
      default:
        await Promise.all([
          addSectionToPDF(statusRef, 'Indicadores por Estado de Adopción'),
          addSectionToPDF(raceCategoryRef, 'Distribución por Raza y Categoría'),
          addSectionToPDF(genderRef, 'Estadísticas por Género')
        ]);
    }

    doc.save(`Informe_Mascotas_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  if (loading) {
    return (
      <div className="loading-container-KYS">
        <div className="loading-spinner-KYS"></div>
        <p>Cargando reportes...</p>
      </div>
    );
  }

  return (
    <div className="reports-container-KYS" ref={pdfContainerRef}>
      <button className="logout-btn-KYS" onClick={handleBack}>
        <img src={backIcon} alt="Volver" className="icon-img-KYS" />
      </button>
      
      <div className="reports-header-KYS">
        <h1>Informe de Mascotas</h1>
        <div>
          <button onClick={downloadPDF} className="download-btn-KYS">
            Exportar a PDF
          </button>
        </div>
      </div>

      <div className="tabs-container-KYS">
        <button 
          className={`tab-btn-KYS ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          Por Estado
        </button>
        <button 
          className={`tab-btn-KYS ${activeTab === 'race-category' ? 'active' : ''}`}
          onClick={() => setActiveTab('race-category')}
        >
          Razas y Categorías
        </button>
        <button 
          className={`tab-btn-KYS ${activeTab === 'gender' ? 'active' : ''}`}
          onClick={() => setActiveTab('gender')}
        >
          Por Género
        </button>
      </div>

      <div className="report-content-KYS">
        {activeTab === 'status' && (
          <div className="report-section-KYS pdf-export" ref={statusRef}>
            <h2 className="section-title-KYS">Indicadores por Estado de Adopción</h2>
            
            <div className="indicators-KYS">
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Total Mascotas</span>
                <span className="indicator-value-KYS">
                  {statusReport.reduce((sum, item) => sum + (item.cantidad || 0), 0)}
                </span>
              </div>
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Adoptadas</span>
                <span className="indicator-value-KYS">
                  {statusReport.find(item => item.estado === 'Adoptado')?.cantidad || 0}
                </span>
              </div>
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Por Adoptar</span>
                <span className="indicator-value-KYS">
                  {statusReport.find(item => item.estado === 'Por adoptar')?.cantidad || 0}
                </span>
              </div>
            </div>

            <div className="chart-container-KYS">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={statusReport}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    innerRadius={70}
                    dataKey="cantidad"
                    nameKey="estado"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {statusReport.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} mascotas`, 'Cantidad']}
                  />
                  <Legend 
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="table-section-KYS">
              <h3 className="table-title-KYS">Detalle por Estado</h3>
              <div className="table-container-KYS">
                <table className="report-table-KYS">
                  <thead>
                    <tr>
                      <th>Estado</th>
                      <th>Cantidad</th>
                      <th>Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusReport.map((item, index) => {
                      const total = statusReport.reduce((sum, i) => sum + (i.cantidad || 0), 0);
                      const percentage = total > 0 ? ((item.cantidad / total) * 100).toFixed(2) : 0;
                      return (
                        <tr key={index}>
                          <td>{item.estado}</td>
                          <td>{item.cantidad}</td>
                          <td>{percentage}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'race-category' && (
          <div className="report-section-KYS pdf-export" ref={raceCategoryRef}>
            <h2 className="section-title-KYS">Distribución por Raza y Categoría</h2>
            
            <div className="indicators-KYS">
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Razas Únicas</span>
                <span className="indicator-value-KYS">
                  {[...new Set(raceCategoryReport.map(item => item.raza))].length}
                </span>
              </div>
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Categorías</span>
                <span className="indicator-value-KYS">
                  {[...new Set(raceCategoryReport.map(item => item.categoria))].length}
                </span>
              </div>
            </div>

            <div className="chart-container-KYS">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={raceCategoryReport.slice(0, 10)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                  <XAxis 
                    dataKey="raza" 
                    angle={-45} 
                    textAnchor="end" 
                    height={70}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} mascotas`, 'Cantidad']}
                    labelFormatter={(label) => `Raza: ${label}`}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                  <Bar 
                    dataKey="cantidad" 
                    name="Cantidad" 
                    fill="#3949ab" 
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="table-section-KYS">
              <h3 className="table-title-KYS">Top 10 Razas y Categorías</h3>
              <div className="table-container-KYS">
                <table className="report-table-KYS">
                  <thead>
                    <tr>
                      <th>Raza</th>
                      <th>Categoría</th>
                      <th>Cantidad</th>
                      <th>% del Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {raceCategoryReport.slice(0, 10).map((item, index) => {
                      const total = raceCategoryReport.reduce((sum, i) => sum + (i.cantidad || 0), 0);
                      const percentage = total > 0 ? ((item.cantidad / total) * 100).toFixed(2) : 0;
                      return (
                        <tr key={index}>
                          <td>{item.raza}</td>
                          <td>{item.categoria}</td>
                          <td>{item.cantidad}</td>
                          <td>{percentage}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gender' && (
          <div className="report-section-KYS pdf-export" ref={genderRef}>
            <h2 className="section-title-KYS">Estadísticas por Género</h2>
            
            <div className="indicators-KYS">
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Machos</span>
                <span className="indicator-value-KYS">
                  {genderData.find(item => item.genero === 'macho')?.cantidad || 0}
                </span>
              </div>
              <div className="indicator-item-KYS">
                <span className="indicator-label-KYS">Hembras</span>
                <span className="indicator-value-KYS">
                  {genderData.find(item => item.genero === 'hembra')?.cantidad || 0}
                </span>
              </div>
            </div>

            <div className="chart-container-KYS">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    innerRadius={70}
                    dataKey="cantidad"
                    nameKey="genero"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} mascotas`, 'Cantidad']}
                  />
                  <Legend 
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="table-section-KYS">
              <h3 className="table-title-KYS">Distribución Detallada</h3>
              <div className="table-container-KYS">
                <table className="report-table-KYS">
                  <thead>
                    <tr>
                      <th>Género</th>
                      <th>Cantidad</th>
                      <th>Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {genderData.map((item, index) => {
                      const total = genderData.reduce((sum, i) => sum + (i.cantidad || 0), 0);
                      const percentage = total > 0 ? ((item.cantidad / total) * 100).toFixed(2) : 0;
                      return (
                        <tr key={index}>
                          <td>{item.genero}</td>
                          <td>{item.cantidad}</td>
                          <td>{percentage}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPageKYS;
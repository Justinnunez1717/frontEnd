/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SCHEMAS = {
  blank: [],
  search: [
    { type: 'text', label: ' Search the Database', name: 'query'},
   ],
  login: [
    { type: 'text', label: ' Username', name: 'username' },
    { type: 'password', label: ' Password', name: 'password' },
  ],
  registration: [
    { type: 'email', label: ' Email', name: 'email' },
    { type: 'text', label: ' Username', name: 'username' },
    { type: 'password', label: ' Password', name: 'password' },
    { type: 'password', label: ' Confrim Password', name: 'confirmPassword' },
  ],
  target: [
    { type: 'number', label: ' Target Id', name: 'target_id' },
    { type: 'number', label: ' Intended Target Gene Id', name: 'intended_target_gene_id' },
    { type: 'number', label: ' Intended Target Entrez Gene Id', name: 'intended_target_entrez_gene_id' },
    { type: 'text', label: ' Intended Target Official Full Name', name: 'intended_target_official_full_name' },
    { type: 'text', label: ' Intended Target Gene Name', name: 'intended_target_gene_name' },
    { type: 'text', label: ' Intended Target Official Symbol', name: 'intended_target_official_symbol' },
    { type: 'text', label: ' Intended Target Gene Symbol', name: 'intended_target_gene_symbol' },
    { type: 'text', label: ' Intended Target Description', name: 'intended_target_description' },
    { type: 'text', label: ' Intended Target Uniprot Accession Number', name: 'intended_target_uniprot_accession_number' },
    { type: 'number', label: ' Intended Target Organism Id', name: 'intended_target_organism_id' },
    { type: 'text', label: ' Intended Target Track Status', name: 'intended_target_track_status' },
    { type: 'number', label: ' Technological Target Gene Id', name: 'technological_target_gene_id' },
    { type: 'number', label: ' Technological Target Entrez Gene Id', name: 'technological_target_entrez_gene_id' },
    { type: 'text', label: ' Technological Target Official Full Name', name: 'technological_target_official_full_name' },
    { type: 'text', label: ' Technological Target Gene Name', name: 'technological_target_gene_name' },
    { type: 'text', label: ' Technological Target Official Symbol', name: 'technological_target_official_symbol' },
    { type: 'text', label: ' Technological Target Gene Symbol', name: 'technological_target_gene_symbol' },
    { type: 'text', label: ' Technological Target Description', name: 'technological_target_description' },
    { type: 'text', label: ' Technological Target Uniprot Accession Number', name: 'technological_target_uniprot_accession_number' },
    { type: 'number', label: ' Technological Target Organism Id', name: 'technological_target_organism_id' },
    { type: 'text', label: ' Technological Target Track Status', name: 'technological_target_track_status' },
  ],
  experiment: [
    { type: 'text', label: ' Experiment Name', name: 'experiment_name' },
    { type: 'number', label: ' Experiment ID', name: 'experiment_ID' },
  ],
  chemical: [
    { type: 'text', label: ' Chemical Name', name: 'chemical_name' },
    { type: 'number', label: ' Chemical ID', name: 'chemical_id' },
  ],
  toxicity: [
    { type: 'number', label: ' M4id', name: 'm4id' },
    { type: 'number', label: ' M5id', name: 'm5id' },
    { type: 'text', label: ' Spid', name: 'spid' },
    { type: 'number', label: ' Stkc', name: 'stkc' },
    { type: 'text', label: ' Stkc Unit', name: 'stkc_unit' },
    { type: 'text', label: ' Tested Conc Unit', name: 'tested_conc_unit' },
    { type: 'text', label: ' Spid Legacy', name: 'spid_legacy' },
    { type: 'number', label: ' Chid', name: 'chid' },
    { type: 'text', label: ' Casn', name: 'casn' },
    { type: 'text', label: ' Chnm', name: 'chnm' },
    { type: 'text', label: ' Code', name: 'code' },
    { type: 'number', label: ' Aeid', name: 'aeid' },
    { type: 'text', label: ' Aenm', name: 'aenm' },
    { type: 'text', label: ' Resp Unit', name: 'resp_unit' },
    { type: 'number', label: ' Nconc', name: 'nconc' },
    { type: 'number', label: ' Npts', name: 'npts' },
    { type: 'number', label: ' Nrep', name: 'nrep' },
    { type: 'number', label: ' Nmed Gtbl', name: 'nmed_gtbl' },
    { type: 'number', label: ' Hitc', name: 'hitc' },
    { type: 'text', label: ' Modl', name: 'modl' },
    { type: 'number', label: ' Fitc', name: 'fitc' },
    { type: 'number', label: ' Coff', name: 'coff' },
    { type: 'number', label: ' Bmad', name: 'bmad' },
    { type: 'number', label: ' Gsid Rep', name: 'gsid_rep' },
    { type: 'checkbox', label: ' Chit', name: 'chit' },
    { type: 'number', label: ' Flag Ids', name: 'flag_ids' },
    { type: 'text', label: ' Flags', name: 'flags' },
    { type: 'number', label: ' Resp Max', name: 'resp_max' },
    { type: 'number', label: ' Resp Min', name: 'resp_min' },
    { type: 'number', label: ' Max Mean', name: 'max_mean' },
    { type: 'number', label: ' Max Mean Conc', name: 'max_mean_conc' },
    { type: 'number', label: ' Max Med', name: 'max_med' },
    { type: 'number', label: ' Max Med Conc', name: 'max_med_conc' },
    { type: 'number', label: ' Logc Max', name: 'logc_max' },
    { type: 'number', label: ' Logc Min', name: 'logc_min' },
    { type: 'number', label: ' Actp', name: 'actp' },
    { type: 'number', label: ' Modl Er', name: 'modl_er' },
    { type: 'number', label: ' Modl Tp', name: 'modl_tp' },
    { type: 'number', label: ' Modl Ga', name: 'modl_ga' },
    { type: 'number', label: ' Modl Gw', name: 'modl_gw' },
    { type: 'number', label: ' Modl La', name: 'modl_la' },
    { type: 'number', label: ' Modl Lw', name: 'modl_lw' },
    { type: 'number', label: ' Modl Rmse', name: 'modl_rmse' },
    { type: 'number', label: ' Modl Prob', name: 'modl_prob' },
    { type: 'number', label: ' Modl Acc', name: 'modl_acc' },
    { type: 'number', label: ' Modl Acb', name: 'modl_acb' },
    { type: 'number', label: ' Cnst', name: 'cnst' },
    { type: 'number', label: ' Hill', name: 'hill' },
    { type: 'number', label: ' Hcov', name: 'hcov' },
    { type: 'number', label: ' Gnls', name: 'gnls' },
    { type: 'number', label: ' Gcov', name: 'gcov' },
    { type: 'number', label: ' Cnst Er', name: 'cnst_er' },
    { type: 'number', label: ' Cnst Aic', name: 'cnst_aic' },
    { type: 'number', label: ' Cnst Rmse', name: 'cnst_rmse' },
    { type: 'number', label: ' Cnst Prob', name: 'cnst_prob' },
    { type: 'number', label: ' Hill Tp', name: 'hill_tp' },
    { type: 'number', label: ' Hill Tp Sd', name: 'hill_tp_sd' },
    { type: 'number', label: ' Hill Ga', name: 'hill_ga' },
    { type: 'number', label: ' Hill Ga Sd', name: 'hill_ga_sd' },
    { type: 'number', label: ' Hill Gw', name: 'hill_gw' },
    { type: 'number', label: ' Hill Gw Sd', name: 'hill_gw_sd' },
    { type: 'number', label: ' Hill Er', name: 'hill_er' },
    { type: 'number', label: ' Hill Er Sd', name: 'hill_er_sd' },
    { type: 'number', label: ' Hill Aic', name: 'hill_aic' },
    { type: 'number', label: ' Hill Rmse', name: 'hill_rmse' },
    { type: 'number', label: ' Hill Prob', name: 'hill_prob' },
    { type: 'number', label: ' Gnls Tp', name: 'gnls_tp' },
    { type: 'text', label: ' Gls Tp Sd', name: 'gnls_tp_sd' },
    { type: 'number', label: ' Gnls Ga', name: 'gnls_ga' },
    { type: 'text', label: ' Gnls Ga Sd', name: 'gnls_ga_sd' },
    { type: 'number', label: ' Gnls Gw', name: 'gnls_gw' },
    { type: 'text', label: ' Gnls Gw Sd', name: 'gnls_gw_sd' },
    { type: 'number', label: ' Gnls La', name: 'gnls_la' },
    { type: 'text', label: ' Gnls La Sd', name: 'gnls_la_sd' },
    { type: 'number', label: ' Gnls Lw', name: 'gnls_lw' },
    { type: 'text', label: ' Gnls Lw Sd', name: 'gnls_lw_sd' },
    { type: 'number', label: ' Gnls Er', name: 'gnls_er' },
    { type: 'text', label: ' Gnls Er Sd', name: 'gnls_er_sd' },
    { type: 'number', label: ' Gnls Aic', name: 'gnls_aic' },
    { type: 'number', label: ' Gnls Rmse', name: 'gnls_rmse' },
    { type: 'number', label: ' Gnls Prob', name: 'gnls_prob' },
  ],
  assay: [
    { type: 'number', label: ' Aid', name: 'aid' },
    { type: 'number', label: ' Acid', name: 'acid' },
    { type: 'number', label: ' Aeid', name: 'aeid' },
    { type: 'number', label: ' Asid', name: 'asid' },
    { type: 'text', label: ' Assay Source Name', name: 'assay_source_name' },
    { type: 'text', label: ' Assay Source Long Name', name: 'assay_source_long_name' },
    { type: 'text', label: ' Assay Source Desc', name: 'assay_source_desc' },
    { type: 'text', label: ' Assay Name', name: 'assay_name' },
    { type: 'text', label: ' Assay Desc', name: 'assay_desc' },
    { type: 'number', label: ' Timepoint Hr', name: 'timepoint_hr' },
    { type: 'number', label: ' Organism Id', name: 'organism_id' },
    { type: 'text', label: ' Organism', name: 'organism' },
    { type: 'text', label: ' Tissue', name: 'tissue' },
    { type: 'text', label: ' Cell Format', name: 'cell_format' },
    { type: 'text', label: ' Cell Free Component Source', name: 'cell_free_component_source' },
    { type: 'text', label: ' Cell Short Name', name: 'cell_short_name' },
    { type: 'text', label: ' Cell Growth Mode', name: 'cell_growth_mode' },
    { type: 'text', label: ' Assay Footprint', name: 'assay_footprint' },
    { type: 'text', label: ' Assay Format Type', name: 'assay_format_type' },
    { type: 'text', label: ' Assay Format Type Sub', name: 'assay_format_type_sub' },
    { type: 'text', label: ' Content Readout Type', name: 'content_readout_type' },
    { type: 'text', label: ' Dilution Solvent', name: 'dilution_solvent' },
    { type: 'number', label: ' Dilution Solvent Percent Max', name: 'dilution_solvent_percent_max' },
    { type: 'text', label: ' Assay Component Name', name: 'assay_component_name' },
    { type: 'text', label: ' Assay Component Desc', name: 'assay_component_desc' },
    { type: 'text', label: ' Assay Component Target Desc', name: 'assay_component_target_desc' },
    { type: 'text', label: ' Parameter Readout Type', name: 'parameter_readout_type' },
    { type: 'text', label: ' Assay Design Type', name: 'assay_design_type' },
    { type: 'text', label: ' Assay Design Type Sub', name: 'assay_design_type_sub' },
    { type: 'text', label: ' Biological Process Target', name: 'biological_process_target' },
    { type: 'text', label: ' Detection Technology Type', name: 'detection_technology_type' },
    { type: 'text', label: ' Detection Technology Type Sub', name: 'detection_technology_type_sub' },
    { type: 'text', label: ' Detection Technology', name: 'detection_technology' },
    { type: 'text', label: ' Signal Direction Type', name: 'signal_direction_type' },
    { type: 'text', label: ' Key Assay Reagent Type', name: 'key_assay_reagent_type' },
    { type: 'text', label: ' Key Assay Reagent', name: 'key_assay_reagent' },
    { type: 'text', label: ' Technological Target Type', name: 'technological_target_type' },
    { type: 'text', label: ' Technological Target Type Sub', name: 'technological_target_type_sub' },
    { type: 'text', label: ' Assay Component Endpoint Name', name: 'assay_component_endpoint_name' },
    { type: 'number', label: ' Export Ready', name: 'export_ready' },
    { type: 'number', label: ' Internal Ready', name: 'internal_ready' },
    { type: 'text', label: ' Assay Component Endpoint Desc', name: 'assay_component_endpoint_desc' },
    { type: 'text', label: ' Assay Function Type', name: 'assay_function_type' },
    { type: 'text', label: ' Normalized Data Type', name: 'normalized_data_type' },
    { type: 'text', label: ' Analysis Direction', name: 'analysis_direction' },
    { type: 'number', label: ' Burst Assay', name: 'burst_assay' },
    { type: 'text', label: ' Key Positive Control', name: 'key_positive_control' },
    { type: 'text', label: ' Signal Direction', name: 'signal_direction' },
    { type: 'text', label: ' Intended Target Type', name: 'intended_target_type' },
    { type: 'text', label: ' Intended Target Type Sub', name: 'intended_target_type_sub' },
    { type: 'text', label: ' Intended Target Family', name: 'intended_target_family' },
    { type: 'text', label: ' Intended Target Family Sub', name: 'intended_target_family_sub' },
    { type: 'number', label: ' Fit All', name: 'fit_all' },
    { type: 'text', label: ' Reagent Arid', name: 'reagent_arid' },
    { type: 'text', label: ' Reagent Reagent Name Value', name: 'reagent_reagent_name_value' },
    { type: 'text', label: ' Reagent Reagent Name Value Type', name: 'reagent_reagent_name_value_type' },
    { type: 'text', label: ' Reagent Culture Or Assay', name: 'reagent_culture_or_assay' },
  ],
  citation: [
    { type: 'number', label: ' Citation Id', name: 'citation_id' },
    { type: 'number', label: ' Pmid', name: 'pmid' },
    { type: 'text', label: ' Doi', name: 'doi' },
    { type: 'text', label: ' Other Source', name: 'other_source' },
    { type: 'number', label: ' Other Id', name: 'other_id' },
    { type: 'text', label: ' Citation', name: 'citation' },
    { type: 'text', label: ' Title', name: 'title' },
    { type: 'text', label: ' Author', name: 'author' },
    { type: 'text', label: ' Url', name: 'url' },
  ],
  citation_id: [
    { type: 'number', label: ' Id', name: 'id' },
    { type: 'number', label: ' Aeid', name: 'aeid' },
    { type: 'number', label: ' Citation Id', name: 'citation_id' },
    { type: 'number', label: ' Pmid', name: 'pmid' },
  ],
  target_id: [
    { type: 'number', label: ' Id', name: 'id' },
    { type: 'number', label: ' Aeid', name: 'aeid' },
    { type: 'number', label: ' Target Id', name: 'target_id' },
  ],
};

export const portfolioData = {
  name: 'Sai Cheboina',
  title: 'Senior Software Engineer',
  tagline: 'senior software engineer',
  aboutMe: `With over nine years of experience as a Senior Software Engineer, I specialize in building the backbone of modern digital products. My passion lies in architecting and implementing scalable, secure, and highly observable cloud-native platforms that power businesses.

I have a proven track record of leading complex projects on AWS, Azure, and GCP, where I've automated infrastructure with Terraform, built robust CI/CD pipelines with GitHub Actions and Jenkins, and orchestrated microservices with Kubernetes and Docker. I thrive on solving complex problems, whether it's migrating monolithic applications to the cloud or engineering fraud detection systems that run with millisecond latency.

My approach is rooted in a deep understanding of both development and operations, ensuring that the systems I build are not only powerful but also resilient, efficient, and easy to maintain. I'm always eager to connect with like-minded professionals and explore new challenges in the world of cloud engineering.`,
  socials: {
    github: 'https://github.com/saicheboina',
    linkedin: 'https://www.linkedin.com/in/saicheboina/',
    email: 'mailto:cheboinasai20@gmail.com',
    phone: 'tel:+16146021285',
  },
  skills: [
    {
      category: 'Cloud',
      items: ['AWS', 'Azure', 'GCP'],
    },
    {
      category: 'IaC',
      items: ['Terraform', 'CloudFormation', 'ARM Templates', 'CDK'],
    },
    {
      category: 'CI/CD',
      items: ['GitHub Actions', 'Jenkins', 'GitLab', 'Azure DevOps'],
    },
    {
      category: 'Containers & Orchestration',
      items: ['Docker', 'Kubernetes', 'EKS', 'AKS', 'GKE'],
    },
    {
      category: 'Security',
      items: ['IAM', 'GuardDuty', 'Defender', 'Snyk', 'SonarQube'],
    },
    {
      category: 'Monitoring',
      items: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack'],
    },
    {
      category: 'Config Management',
      items: ['Ansible', 'Chef', 'Puppet'],
    },
    {
      category: 'Languages',
      items: ['Bash', 'YAML', 'JSON', 'Python'],
    },
  ],
  projects: [
    {
      title: 'Cloud Platform Engineering',
      cloud: 'AWS',
      tools: ['Terraform', 'EKS', 'Jenkins', 'ArgoCD', 'Istio', 'Crossplane'],
      summary:
        'Engineered a robust internal developer platform on AWS EKS, reducing developer onboarding from weeks to days and standardizing deployment workflows across the organization.',
    },
    {
      title: 'DevSecOps Transformation',
      cloud: 'Azure',
      tools: ['Azure DevOps', 'Snyk', 'SonarQube', 'Aqua Security', 'Open Policy Agent'],
      summary:
        'Led a DevSecOps initiative to integrate security into the CI/CD pipeline, achieving a 90% reduction in critical vulnerabilities and ensuring compliance with industry standards.',
    },
    {
      title: 'CI/CD Pipeline Automation',
      cloud: 'AWS',
      tools: ['GitHub Actions', 'Packer', 'Ansible', 'Terraform', 'Consul'],
      summary:
        'Automated the creation of golden AMIs and established a multi-account CI/CD pipeline, cutting down release cycles by 60% and improving infrastructure consistency.',
    },
    {
      title: 'Containerization & Migration',
      cloud: 'On-Premise',
      tools: ['Docker', 'Kubernetes', 'Helm', 'Nginx Ingress', 'Cert-Manager'],
      summary:
        'Containerized legacy Java applications and migrated them to a modern Kubernetes platform, resulting in a 50% improvement in application performance and scalability.',
    },
    {
      title: 'Infrastructure as Code for Azure',
      cloud: 'Azure',
      tools: ['Terraform', 'ARM Templates', 'Azure CLI', 'PowerShell'],
      summary:
        'Developed reusable Terraform modules for Azure infrastructure, enabling teams to provision environments 75% faster while enforcing security and governance policies.',
    },
    {
      title: 'Observability Platform Implementation',
      cloud: 'GCP',
      tools: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry'],
      summary: 'Implemented a full-stack observability platform on GCP, providing deep insights into system performance and reducing mean time to resolution (MTTR) by 40%.',
    }
  ],
  experience: [
    {
      company: 'Wells Fargo',
      role: 'Sr. Software Engineer',
      period: '2024 – Present',
    },
    {
      company: 'Fiserv',
      role: 'Sr. Software Engineer',
      period: '2022 – 2024',
    },
    {
      company: 'Agility',
      role: 'Senior Software Engineer',
      period: '2020 – 2022',
    },
    {
      company: 'Tvisha Technologies Incorporation',
      role: 'Junior Software Engineer',
      period: '2018 – 2020',
    },
    {
      company: 'Value Momentum',
      role: 'Junior Software Engineer',
      period: '2015 – 2018',
    },
  ],
  professionalExperience: [
    {
      client: 'Wells Fargo - Charlotte, NC',
      role: 'Sr. Software Engineer',
      responsibilities: [
        'Designed and deployed a highly available EKS cluster using Terraform, enabling fraud detection services to scale with controlled security boundaries and custom network policies.',
        'Created GitOps-style CI/CD pipelines using GitHub Actions, automating the build, test, and promotion lifecycle of containerized workloads across EKS namespaces.',
        'Developed Helm charts to templatize deployment of microservices across EKS, reducing deployment errors and promoting consistent configurations across lower and production environments.',
        'Integrated Fluent Bit as a Kubernetes DaemonSet for streaming logs from EKS nodes to CloudWatch Logs, improving observability and forensic analysis for fraud activity.',
        'Automated IAM role creation and policy attachment using Terraform, enforcing least-privilege access across fraud microservices and internal teams.',
        'Implemented Ansible playbooks to configure baseline OS settings on Amazon Linux 2 EC2 bastion hosts and container nodes, supporting secure configuration audits.',
        'Configured CloudTrail and AWS Config Rules to monitor, alert, and enforce compliance for changes in EKS clusters and critical fraud service infrastructure.',
        'Established runtime threat detection in EKS using GuardDuty, integrating with AWS Security Hub for streamlined incident correlation and escalation.',
        'Parameterized infrastructure provisioning using reusable Terraform modules for components like VPC, EKS, IAM, RDS, and S3, promoting standardized environments across fraud-related workloads.',
        'Enabled blue-green and canary deployments using GitHub Actions with Helm upgrade strategies for EKS pods, achieving high availability and rollback support during release cycles.',
        'Collected custom application metrics and Kubernetes node stats using Prometheus and visualized them in Grafana dashboards to detect anomalies during fraud detection workloads.',
        'Collaborated with internal GRC and compliance teams to align all EKS-based infrastructure, IAM policies, and logging pipelines with PCI-DSS, SOX, and internal audit frameworks.',
      ],
      toolsAndTechnology: 'AWS (EKS, EC2, IAM, S3, CloudWatch, CloudTrail, Config, GuardDuty, RDS, SSM), Terraform, GitHub Actions, Docker, Kubernetes (EKS), Helm, Fluent Bit, Ansible, Prometheus, Grafana, Amazon Linux 2, Ubuntu',
    },
    {
      client: 'Fiserv - Charlotte, NC',
      role: 'Sr. Software Engineer',
      responsibilities: [
        'Led the migration of legacy banking applications from on-premises VMs to Azure Kubernetes Service (AKS), leveraging Docker containers and Helm charts to modernize deployments and achieve operational consistency.',
        'Developed and maintained reusable ARM Templates and Terraform modules to provision AKS clusters, network policies, and private DNS zones across multiple banking environments.',
        'Built secure, parameterized Azure DevOps YAML pipelines to automate CI/CD workflows including Docker image builds, security scans, artifact promotion, and staged AKS deployments.',
        'Integrated Azure Key Vault with Azure DevOps pipelines to securely inject secrets and certificates into Kubernetes deployments, eliminating hard-coded credentials across release pipelines.',
        'Designed and configured AKS Horizontal Pod Autoscaler and custom node pools to optimize resource usage and dynamically scale container workloads for high-traffic banking APIs.',
        'Implemented Chef cookbooks to automate OS hardening, vulnerability patching, and compliance enforcement across Azure VM scale sets used by legacy workloads in transition.',
        'Set up Azure Monitor and Application Insights to collect Kubernetes logs, performance metrics, and distributed traces, enabling proactive alerting and root cause analysis for critical services.',
        'Hardened Kubernetes environments by enabling Microsoft Defender for Cloud, auditing RBAC policies, enforcing container image policies, and automating drift detection for critical controls.',
        'Used Pod Disruption Budgets (PDBs) and Pod Affinity rules in AKS to ensure high availability of microservices during maintenance events and node drain operations.',
        'Created service-level dashboards in Grafana by exposing AKS metrics via Prometheus exporters, supporting 24/7 observability and SRE-led operations reviews.',
        'Configured Azure Application Gateway with WAF policies for secure ingress traffic routing to AKS services, supporting encrypted traffic, threat detection, and blue-green deployments.',
        'Enforced quality gates by integrating Sonar Cloud scans and security rules into Azure Repos branch policies, ensuring static code analysis and vulnerability detection during every pull request.',
      ],
      toolsAndTechnology: 'Azure (AKS, ACR, Azure DevOps, Azure VMSS, Azure Monitor, App Insights, Key Vault, Application Gateway, Front Door, Blob Storage, Defender for Cloud, ARM Templates), Docker, Helm, Prometheus, Grafana, Sonar Cloud, Terraform, Chef, Git, Linux (Ubuntu & RHEL)',
    },
    {
      client: 'Agility – Hyderabad, India',
      role: 'Sr. Software Engineer',
      responsibilities: [
        "Designed containerized microservices for Agility's logistics platform using Docker and deployed them to Amazon ECS Fargate clusters for fully managed, scalable orchestration.",
        'Automated end-to-end infrastructure deployment using AWS CloudFormation templates to provision ECS clusters, IAM roles, RDS, ALBs, and VPC resources across all environments.',
        'Built CI/CD pipelines using Jenkins integrated with AWS CodePipeline, enabling automated build, test, and deploy workflows triggered by GitHub PRs for ECS microservices.',
        'Implemented centralized secret and configuration management using AWS SSM Parameter Store and AWS KMS for encrypted runtime variable injection in ECS workloads.',
        'Configured SonarQube quality gates in CI/CD pipelines to enforce code quality standards and fail builds on security vulnerabilities or low maintainability scores.',
        'Integrated ELK Stack (Elasticsearch, Logstash, Kibana) with ECS containers to enable real-time log analysis, search, and visualization for critical logistics microservices.',
        'Maintained CloudWatch Logs integration alongside ELK for audit and compliance purposes, tagging logs based on service, environment, and container instance metadata.',
        'Implemented detailed application and container-level monitoring using custom CloudWatch dashboards to track memory, CPU, and disk utilization across ECS tasks.',
        'Deployed Helm-based services to internal EKS (Kubernetes) clusters during pre-prod evaluation, validating auto-scaling and container orchestration flexibility beyond ECS.',
        'Evaluated Kubernetes-native rollout strategies like blue/green and canary deployments within EKS using Jenkins-driven CodePipeline, enabling phased rollouts with zero downtime.',
        'Collaborated with platform engineers to standardize infrastructure provisioning using reusable CloudFormation stacks and CI/CD templates across staging and production.',
        'Conducted periodic security audits leveraging AWS Inspector, AWS Config, AWS KMS, and GuardDuty to harden ECS workloads and detect misconfigurations or threats in real time.',
      ],
      toolsAndTechnology: 'AWS (ECS Fargate, EKS, ECR, EC2, VPC, IAM, RDS, ALB, S3, CloudWatch, CloudTrail, AWS Config, GuardDuty, Inspector, KMS, SSM), Docker, Jenkins, AWS CodePipeline, CloudFormation, SonarQube, ELK Stack (Elasticsearch, Logstash, Kibana)',
    },
    {
      client: 'Tvisha Technologies – Hyderabad, India',
      role: 'Jr. Software Engineer',
      responsibilities: [
        'Developed and deployed e-commerce microservices on AWS using Docker containers and orchestrated them in local Kubernetes (k3s) environments for dev and staging workflows.',
        'Defined and provisioned AWS resources using AWS CDK, including VPCs, EC2, IAM, and ECS services, enabling version-controlled infrastructure delivery through code.',
        'Built modular GitLab CI/CD pipelines with YAML templates to automate Docker builds, vulnerability scans using Snyk, and image pushes to ECR with tagging strategies.',
        'Containerized Java-based checkout, cart, and catalog services using Docker and deployed them to local Kubernetes (k3s) clusters with custom Helm chart simulations.',
        'Integrated Checkov for IaC policy scanning and compliance checks on AWS CDK stacks in CI pipelines, enforcing secure deployment patterns across environments.',
        'Implemented centralized monitoring using Prometheus and custom exporters in k3s, and visualized cluster and application metrics via Grafana dashboards.',
        'Automated configuration management tasks and app deployments with Puppet, managing environment variables, secrets, and Java runtime setups on EC2-based nodes.',
        'Simulated Kubernetes cluster autoscaling and pod failover handling using kind, testing container resiliency patterns locally before deploying to production ECS.',
        'Enforced least-privilege security using IAM roles, inline policies, and SGs for services launched through AWS CDK, ensuring each microservice was properly isolated.',
        'Created reusable CDK constructs for core AWS services like ECS Fargate, RDS, and S3, boosting infrastructure reuse across modules and reducing duplication.',
        'Integrated unit and integration test execution into GitLab CI/CD pipelines, ensuring code quality gates were enforced before containerization and deployment stages.',
        'Enabled real-time alerting in Prometheus for memory spikes, HTTP errors, and pod crashes in k3s, and visualized long-term trends using Grafana panels.',
      ],
      toolsAndTechnology: 'AWS (EC2, ECR, IAM, S3, ECS Fargate), AWS CDK, Docker, Kubernetes (k3s/kind), GitLab CI/CD, Prometheus, Grafana, Checkov, Snyk, Puppet, Amazon Linux 2, Ubuntu',
    },
    {
      client: 'Value Momentum – Hyderabad, India',
      role: 'Jr. Software Engineer',
      responsibilities: [
        'Automated GCP infrastructure provisioning for insurance workloads using Deployment Manager, creating templates for GKE, Cloud SQL, and Compute Engine with reusable YAML schemas.',
        'Designed CI/CD pipelines with Cloud Build and integrated GitHub triggers to automate code builds, containerization, and image pushes to Artifact Registry.',
        'Containerized over 20 Java-based microservices using Docker and deployed them on GKE, implementing Helm charts for environment-specific configuration management.',
        'Deployed highly available Kubernetes clusters on GKE with multi-zone node pools, autoscaling, and fine-grained IAM bindings for role-based access control.',
        'Built custom Cloud Build workflows to orchestrate Helm chart packaging, Docker image builds, and rollout deployments for insurance microservices.',
        'Configured horizontal pod autoscalers (HPA) and resource quotas in GKE to optimize resource usage and maintain service responsiveness under heavy loads.',
        'Implemented centralized monitoring and logging using GCP Operations Suite (formerly Stackdriver), creating custom dashboards and log-based alerts for critical insurance services.',
        'Developed Ansible playbooks to automate post-deployment configuration tasks for Compute Engine instances and service integration with Cloud SQL.',
        'Enforced security compliance by managing IAM policies, encrypting secrets and volumes with Cloud KMS, and auditing access via Cloud Audit Logs.',
        'Enabled blue-green deployments for critical services using Cloud Build + GKE + Helm, reducing production downtime and ensuring rollout stability.',
        'Integrated Cloud Build with Security Command Center to run static and container vulnerability scans as part of the CI/CD lifecycle.',
        'Authored detailed operational runbooks and architectural diagrams, promoting best practices in Kubernetes-based application lifecycle management within the DevOps team.',
      ],
      toolsAndTechnology: 'GCP (GKE, Cloud Build, Cloud Deploy, Deployment Manager, Cloud SQL, Cloud Storage, Artifact Registry, Cloud Logging, Cloud Monitoring, IAM, Cloud KMS, Security Command Center), Docker, Helm, Ansible, GitHub, Ubuntu',
    },
  ],
};
